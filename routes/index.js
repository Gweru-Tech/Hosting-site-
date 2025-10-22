const express = require('express');
const router = express.Router();

// Pricing plans data
const pricingPlans = [
  {
    name: 'Starter',
    price: 4.99,
    features: [
      '1 Website',
      '10 GB SSD Storage',
      '100 GB Bandwidth',
      'Free SSL Certificate',
      '24/7 Support',
      '1 Email Account'
    ],
    popular: false
  },
  {
    name: 'Professional',
    price: 9.99,
    features: [
      '5 Websites',
      '50 GB SSD Storage',
      'Unlimited Bandwidth',
      'Free SSL Certificate',
      '24/7 Priority Support',
      '10 Email Accounts',
      'Free Domain (1 year)',
      'Daily Backups'
    ],
    popular: true
  },
  {
    name: 'Business',
    price: 19.99,
    features: [
      'Unlimited Websites',
      '100 GB SSD Storage',
      'Unlimited Bandwidth',
      'Free SSL Certificate',
      '24/7 VIP Support',
      'Unlimited Email Accounts',
      'Free Domain (1 year)',
      'Daily Backups',
      'Free CDN',
      'Dedicated IP'
    ],
    popular: false
  }
];

// Home page
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Home - Premium Web Hosting',
    pricingPlans: pricingPlans.slice(0, 3)
  });
});

// Pricing page
router.get('/pricing', (req, res) => {
  res.render('pricing', {
    title: 'Pricing - Choose Your Plan',
    pricingPlans
  });
});

// Features page
router.get('/features', (req, res) => {
  res.render('features', {
    title: 'Features - What We Offer'
  });
});

// Contact page
router.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'Contact Us'
  });
});

module.exports = router;
