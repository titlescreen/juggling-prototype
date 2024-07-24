//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
router.get('/what-is-your-name', function (req, res) {
  res.render('/what-is-your-name')
});

router.post('/what-is-your-name', function (req, res) {
  res.redirect('new-or-renew')
});

router.get('/new-or-renew', function (req, res) {
  res.render('/new-or-renew')
});

router.post('/new-or-renew', function (req, res) {
    res.redirect('colour')
});

router.get('/colour', function (req, res) {
  res.render('/colour')
});

router.post('/colour', function (req, res) {

  res.redirect('new-details')
});

router.get('/renew-confirm-details', function (req, res) {
  res.render('/renew-confirm-details')
});

router.post('/renew-confirm-details', function (req, res) {
  res.redirect('check-answers')
});

router.get('/check-answers', function (req, res) {
  res.render('/check-answers')
});

router.post('/check-answers', function (req, res) {
  res.redirect('confirmation')
});
