const express = require('express');
const router = express.Router();
const authMiddleware = require('../Middlewares/authenticate'); // Ensure you
const { upload } = require('../Middlewares/fileupload')


const categoryController = require('../Controllers/categoryController');
const userController = require('../Controllers/userController')
const subCategoryController = require('../Controllers/subCategoryController');
const subSubCategoryController = require('../Controllers/subSubCategoryController');
const brandController = require('../Controllers/brandController');
const deliveryManController = require('../Controllers/deliveryManController');
const emergencyContactController = require('../Controllers/emergencyContactController');
const attributeSetupController = require('../Controllers/attributeSetupController');
const termsAndConditionsController = require('../Controllers/termsAndConditionsController');
const privacypolicyController = require('../Controllers/privacyPolicyController');
const refundPolicyController = require('../Controllers/refundPolicyController');
const returnPolicyController = require('../Controllers/returnPolicyController');
const cancellationPolicyController = require('../Controllers/cancellationPolicyController');
const shippingPolicyController = require('../Controllers/shippingPolicyController');
const aboutUsController = require('../Controllers/aboutUsController');
const helpTopicController = require('../Controllers/helpTopicController');
const companyReliabilityController = require('../Controllers/companyReliabilityController');



// User routes
router.post('/users/create',upload.fields([{ name: 'image', maxCount: 1 }, { name: 'idImage', maxCount: 1 }]), userController.createUser)
router.get('/users/getall',userController.getAllUsers)
router.get('/users/get/:id', userController.getUserById)
router.put('/users/status/:id', userController.userStatus)
router.put('/users/delete/:id', userController.deleteUserById)
router.post('/users/update/:id',userController.updateUserById)
router.post('/users/userlogin',userController.loginUser)


//Routes for category
router.post('/categories/add', categoryController.addCategory);
router.get('/categories/getall', categoryController.getAllCategories);
router.get('/categories/get/:id', categoryController.getCategoryById);
router.put('/categories/update/:id', categoryController.updateCategory);
router.delete('/categories/delete/:id', categoryController.deleteCategory);
router.patch('/categories/restore/:id', categoryController.restoreCategory);



//Routes for SubCategories
router.post('/subcategories/add', subCategoryController.addSubCategory);
router.get('/subcategories/getall', subCategoryController.getAllSubCategories);
router.get('/subcategories/get/:id', subCategoryController.getSubCategoryById);
router.get('/subcategories/filter', subCategoryController.getSubCategoryByName);
router.put('/subcategories/update/:id', subCategoryController.updateSubCategory);
router.delete('/subcategories/delete/:id', subCategoryController.deleteSubCategory);
router.patch('/subcategories/restore/:id', subCategoryController.restoreSubCategory);




//Routes for sub sub category
router.post('/subSubCategories/add', subSubCategoryController.addSubSubCategory);
router.get('/subSubCategories/getall', subSubCategoryController.getSubSubCategories);
router.get('/subSubCategories/get/:id', subSubCategoryController.getSubSubCategoryById);
router.put('/subSubCategories/update/:id', subSubCategoryController.updateSubSubCategory);
router.delete('/subSubCategories/delete/:id', subSubCategoryController.deleteSubSubCategory);
router.patch('/subSubCategories/restore/:id', subSubCategoryController.restoreSubSubCategory);
router.get('/subSubCategories/get', subSubCategoryController.getSubSubCategoriesByCategory);




//Routes for Brands
router.post('/brands/add', brandController.addBrand);
router.get('/brands/getall', brandController.getBrands);
router.get('/brands/get/:id', brandController.getBrandById);
router.put('/brands/update/:id', brandController.updateBrand);
router.delete('/brands/delete/:id', brandController.deleteBrand);
router.patch('/brands/restore/:id', brandController.restoreBrand);
router.get('/brands/name/:brandName', brandController.getBrandByName);



// Routes for delivery man
router.post('/deliveryman/add', deliveryManController.createDeliveryMan);
router.get('/deliveryman/getall', deliveryManController.getDeliveryMen);
router.get('/deliveryman/get/:id', deliveryManController.getDeliveryManById);
router.put('/deliveryman/update/:id', deliveryManController.updateDeliveryMan);
router.patch('/deliveryman/softdelete/:id', deliveryManController.softDeleteDeliveryMan);
router.patch('/deliveryman/restore/:id', deliveryManController.restoreDeliveryMan);
router.delete('/deliveryman/delete/:id', deliveryManController.permanentDeleteDeliveryMan);


// Routes for emergency Contact
router.post('/emergencycontact/add', emergencyContactController.createEmergencyContact);
router.get('/emergencycontact/getall', emergencyContactController.getEmergencyContacts);
router.get('/emergencycontact/get/:id', emergencyContactController.getEmergencyContactById);
router.put('/emergencycontact/update/:id', emergencyContactController.updateEmergencyContact);
router.patch('/emergencycontact/softdelete/:id', emergencyContactController.softDeleteEmergencyContact);
router.patch('/emergencycontact/restore/:id', emergencyContactController.restoreEmergencyContact);
router.patch('/emergencycontact/status/:id', emergencyContactController.toggleEmergencyContactStatus);



// ROutes for attributes
router.post('/attributes/add', attributeSetupController.createAttribute);
router.get('/attributes/getall', attributeSetupController.getAttributes);
router.get('/attributes/get/:id', attributeSetupController.getAttributeById);
router.put('/attributes/update/:id', attributeSetupController.updateAttribute);
router.patch('/attributes/softdelete/:id', attributeSetupController.softDeleteAttribute);
router.patch('/attributes/restore/:id', attributeSetupController.restoreAttribute);
router.delete('/attributes/delete/:id', attributeSetupController.permanentDeleteAttribute);

// Routes for terms and conditions
router.post('/terms&conditions/add', termsAndConditionsController.createTermsAndConditions);
router.get('/terms&conditions/get/:id', termsAndConditionsController.getTermsAndCondition);
router.get('/terms&conditions/getall', termsAndConditionsController.getTermsAndConditions);
router.put('/terms&conditions/update/:id', termsAndConditionsController.updateTermsAndConditions);
router.delete('/terms&conditions/delete/:id', termsAndConditionsController.deleteTermsAndConditions);

// Routes for privacy policy
router.post('/privacypolicy/add', privacypolicyController.createPrivacyPolicy);
router.get('/privacypolicy/getall', privacypolicyController.getPrivacyPolicies);
router.get('/privacypolicy/get/:id', privacypolicyController.getPrivacyPolicy);
router.put('/privacypolicy/update/:id', privacypolicyController.updatePrivacyPolicy);
router.delete('/privacypolicy/delete/:id', privacypolicyController.deletePrivacyPolicy);

// Routes for  refund Policy
router.post('/refundpolicy/add', refundPolicyController.createRefundPolicy);
router.get('/refundpolicy/getall', refundPolicyController.getRefundPolicies);
router.get('/refundpolicy/get/:id', refundPolicyController.getRefundPolicy);
router.put('/refundpolicy/update/:id', refundPolicyController.updateRefundPolicy);
router.delete('/refundpolicy/delete/:id', refundPolicyController.deleteRefundPolicy);

// Routes for return policy
router.post('/returnpolicy/add', returnPolicyController.createReturnPolicy);
router.get('/returnpolicy/getall', returnPolicyController.getReturnPolicies);
router.get('/returnpolicy/get/:id', returnPolicyController.getReturnPolicy);
router.put('/returnpolicy/update/:id', returnPolicyController.updateReturnPolicy);
router.delete('/returnpolicy/delete/:id', returnPolicyController.deleteReturnPolicy);

// Routes for  cancellation policy
router.post('/cancellationpolicy/add', cancellationPolicyController.createCancellationPolicy);
router.get('/cancellationpolicy/getall', cancellationPolicyController.getCancellationPolicies);
router.get('/cancellationpolicy/get/:id', cancellationPolicyController.getCancellationPolicy);
router.put('/cancellationpolicy/update/:id', cancellationPolicyController.updateCancellationPolicy);
router.delete('/cancellationpolicy/delete/:id', cancellationPolicyController.deleteCancellationPolicy);

// Routes for shipping policy
router.post('/shippingpolicy/add', shippingPolicyController.createShippingPolicy);
router.get('/shippingpolicy/getall', shippingPolicyController.getShippingPolicies);
router.get('/shippingpolicy/get/:id', shippingPolicyController.getShippingPolicy);
router.put('/shippingpolicy/update/:id', shippingPolicyController.updateShippingPolicy);
router.delete('/shippingpolicy/delete/:id', shippingPolicyController.deleteShippingPolicy);

// Routes for aboutUs
router.post('/aboutus/add', aboutUsController.createAboutUs);
router.get('/aboutus/getall', aboutUsController.getAboutUs);
router.get('/aboutus/get/:id', aboutUsController.getAboutUsById);
router.put('/aboutus/update/:id', aboutUsController.updateAboutUs);
router.delete('/aboutus/delete/:id', aboutUsController.deleteAboutUs);

//90



// Routes for /help topic
router.post('/helptopic/add', helpTopicController.createHelpTopic);
router.get('/helptopic/getall', helpTopicController.getHelpTopics);
router.get('/helptopic/get/:id', helpTopicController.getHelpTopic);
router.put('/helptopic/update/:id', helpTopicController.updateHelpTopic);
router.delete('/helptopic/delete/:id', helpTopicController.deleteHelpTopic);
router.put('/helptopic/restore/:id', helpTopicController.restoreHelpTopic);
router.put('/helptopic/toggle-status/:id', helpTopicController.toggleHelpTopicStatus);


// Routes for companyreliability
router.post('/companyreliability/add', companyReliabilityController.createCompanyReliability);
router.get('/companyreliability/getall', companyReliabilityController.getCompanyReliabilities);
router.get('/companyreliability/get/:id', companyReliabilityController.getCompanyReliability);
router.put('/companyreliability/update/:id', companyReliabilityController.updateCompanyReliability);
router.delete('/companyreliability/delete/:id', companyReliabilityController.deleteCompanyReliability);
router.put('/companyreliability/restore/:id', companyReliabilityController.restoreCompanyReliability);
router.put('/companyreliability/toggle-status/:id', companyReliabilityController.toggleCompanyReliabilityStatus);


// ROutes for digital payment
const digitalPaymentMethodController = require('../Controllers/digitalPaymentMethodsController');

router.post('/digitalpayment/add', digitalPaymentMethodController.createDigitalPaymentMethod);
router.get('/digitalpayment/getall', digitalPaymentMethodController.getDigitalPaymentMethods);
router.get('/digitalpayment/get/:id', digitalPaymentMethodController.getDigitalPaymentMethod);
router.put('/digitalpayment/update/:id', digitalPaymentMethodController.updateDigitalPaymentMethod);
router.delete('/digitalpayment/delete/:id', digitalPaymentMethodController.deleteDigitalPaymentMethod);
router.put('/digitalpayment/restore/:id', digitalPaymentMethodController.restoreDigitalPaymentMethod);
router.put('/digitalpayment/toggle-status/:id', digitalPaymentMethodController.toggleDigitalPaymentMethodStatus);

// Routes for offline payment
const offlinePaymentMethodController = require('../Controllers/offlinePaymentMethodsController');

router.post('/offlinepayment/add', offlinePaymentMethodController.createOfflinePaymentMethod);
router.get('/offlinepayment/getall', offlinePaymentMethodController.getOfflinePaymentMethods);
router.get('/offlinepayment/get/:id', offlinePaymentMethodController.getOfflinePaymentMethod);
router.put('/offlinepayment/update/:id', offlinePaymentMethodController.updateOfflinePaymentMethod);
router.delete('/offlinepayment/delete/:id', offlinePaymentMethodController.deleteOfflinePaymentMethod);
router.put('/offlinepayment/restore/:id', offlinePaymentMethodController.restoreOfflinePaymentMethod);
router.put('/offlinepayment/toggle-status/:id', offlinePaymentMethodController.toggleOfflinePaymentMethodStatus);

// Routes for Marketing Tool
const marketingToolController = require('../Controllers/marketingToolController');

router.post('/marketingtool/add', marketingToolController.createMarketingTool);
router.get('/marketingtool/getall', marketingToolController.getMarketingTools);
router.get('/marketingtool/get/:id', marketingToolController.getMarketingTool);
router.put('/marketingtool/update/:id', marketingToolController.updateMarketingTool);
router.delete('/marketingtool/delete/:id', marketingToolController.deleteMarketingTool);
router.put('/marketingtool/restore/:id', marketingToolController.restoreMarketingTool);
router.put('/marketingtool/togglestatus/:id', marketingToolController.toggleMarketingToolStatus);

// Routes for Orders
const orderController = require('../Controllers/ordersController');


router.post('/order/add', orderController.createOrder);
router.get('/order/getall', orderController.getOrders);
router.get('/order/get/:id', orderController.getOrder);
router.put('/order/update/:id', orderController.updateOrder);
router.delete('/order/delete/:id', orderController.deleteOrder);
router.put('/order/restore/:id', orderController.restoreOrder);
router.get('/order/status/:status', orderController.getOrdersByStatus);

//42

module.exports = router