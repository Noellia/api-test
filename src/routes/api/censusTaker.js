const {CensusTakerController} = include('controllers');

module.exports = router => {
    router.get('/', CensusTakerController.fetch);
    router.post('/save', CensusTakerController.save);

    return router;
};
