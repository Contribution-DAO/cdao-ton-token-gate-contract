import { Address, toNano } from 'ton-core';
import { NftCollection } from '../wrappers/NftCollection';
import { compile, NetworkProvider } from '@ton-community/blueprint';

export async function run(provider: NetworkProvider) {
    const nftCollection = provider.open(NftCollection.createFromConfig({
        ownerAddress: provider.sender().address as Address,
        nextItemIndex: 0,
        collectionContent: "https://ton-connect.contributiondao.com/connect/collection-metadata.json",
        commonContent: "https://ton-core.contributiondao.com/sbt/metadata/",
        nftItemCode: await compile('SbtItem'),
        royaltyParams: {
            royaltyFactor: 0,
            royaltyBase: 10000,
            royaltyAddress: provider.sender().address as Address,
        },
    }, await compile('NftCollection')));

    await nftCollection.sendDeploy(provider.sender(), toNano('0.05'));

    await provider.waitForDeploy(nftCollection.address);

    // run methods on `nftCollection`
}
