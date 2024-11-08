import React from 'react';

const Pricing = () => {
    return (
        <>
            <div style={{ display: 'flex' }}>
                <div className="pricing-card">
                    <h3 className="pricing-title">Basic</h3>
                    <p className="pricing-subtitle">Monthly Charge</p>
                    <p className="pricing-price">$14.99</p>
                    <hr className="pricing-divider" />

                    <ul className="pricing-features">
                        <li>Free Setup</li>
                        <li>Bandwidth Limit 10 GB</li>
                        <li>20 User Connection</li>
                        <li className="feature-disabled">Analytics Report</li>
                        <li className="feature-disabled">Public API Access</li>
                        <li className="feature-disabled">Plugins Integration</li>
                        <li className="feature-disabled">Custom Content Management</li>
                    </ul>

                    <hr className="pricing-divider" />

                    <button className="pricing-button">Get Started</button>
                    <p className="pricing-trial">Start Your 30 Day Free Trial</p>
                </div>
                <div className="pricing-card2">
                    <h3 className="pricing-title">Standard</h3>
                    <p className="pricing-subtitle">Monthly Charge</p>
                    <p className="pricing-price">$49.99</p>
                    <hr className="pricing-divider" />

                    <ul className="pricing-features">
                        <li>Free Setup</li>
                        <li>Bandwidth Limit 10 GB</li>
                        <li>20 User Connection</li>
                        <li className="feature-disabled">Analytics Report</li>
                        <li className="feature-disabled">Public API Access</li>
                        <li className="feature-disabled">Plugins Integration</li>
                        <li className="feature-disabled">Custom Content Management</li>
                    </ul>

                    <hr className="pricing-divider" />

                    <button className="pricing-button">Get Started</button>
                    <p className="pricing-trial">Start Your 30 Day Free Trial</p>
                </div>
                <div className="pricing-card3">
                    <h3 className="pricing-title">Premium</h3>
                    <p className="pricing-subtitle">Monthly Charge</p>
                    <p className="pricing-price">$89.99</p>
                    <hr className="pricing-divider" />

                    <ul className="pricing-features">
                        <li>Free Setup</li>
                        <li>Bandwidth Limit 10 GB</li>
                        <li>20 User Connection</li>
                        <li className="feature-disabled">Analytics Report</li>
                        <li className="feature-disabled">Public API Access</li>
                        <li className="feature-disabled">Plugins Integration</li>
                        <li className="feature-disabled">Custom Content Management</li>
                    </ul>

                    <hr className="pricing-divider" />

                    <button className="pricing-button">Get Started</button>
                    <p className="pricing-trial">Start Your 30 Day Free Trial</p>
                </div>
            </div>
        </>
    );
};

export default Pricing;
