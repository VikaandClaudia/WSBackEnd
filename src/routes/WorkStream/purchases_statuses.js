const express = require('express')
const router = express.Router()
const purchaseStatusController = require('../../controllers/WorkStream/purchases_statuses')



router.get('/:purchase_id/allPurchaseStatuses', purchaseStatusController.getAllPurchaseStatuses)
router.post('/:purchase_id', purchaseStatusController.createPurchaseStatus)
router.get('/:purchase_id/:status_id', purchaseStatusController.getOnePurchaseStatus)
router.put('/:purchase_id/:status_id', purchaseStatusController.updatePurchaseStatus)
router.delete('/:purchase_id/:status_id', purchaseStatusController.removePurchaseStatuses)


module.exports = router
