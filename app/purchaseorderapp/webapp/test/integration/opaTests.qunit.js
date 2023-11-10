sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'prasad/purchaseorderapp/test/integration/FirstJourney',
		'prasad/purchaseorderapp/test/integration/pages/POsList',
		'prasad/purchaseorderapp/test/integration/pages/POsObjectPage',
		'prasad/purchaseorderapp/test/integration/pages/PurchaseOrderItemSetObjectPage'
    ],
    function(JourneyRunner, opaJourney, POsList, POsObjectPage, PurchaseOrderItemSetObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('prasad/purchaseorderapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePOsList: POsList,
					onThePOsObjectPage: POsObjectPage,
					onThePurchaseOrderItemSetObjectPage: PurchaseOrderItemSetObjectPage
                }
            },
            opaJourney.run
        );
    }
);