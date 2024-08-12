import { useEffect } from 'react';
import './Pricing.css';

export default function Pricing() {
    useEffect(() => {
        const pricingBoxes = document.querySelectorAll('.pricing-box');

        const handleScroll = () => {
            pricingBoxes.forEach(box => {
                const rect = box.getBoundingClientRect();
                if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                    box.classList.add('scrolled');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className="container-fluid">
                <div className="row PRICING">
                    <div className="col-lg-3">
                        <div className="pricing-box">
                            <div>
                                <p className='pricing-plan'>PRICING PLAN</p>
                            </div>
                            <div>
                                <h1 className='pricing-best'>BEST PRICE FOR YOU</h1>
                            </div>
                            <div className='pricing-p'>
                                Maecenas eros dui, tempus sit amet quam ac, ultrices vehicula elit. Sed euismod vel tortor et luctus. In viverra finibus velit et ullamcorper.
                            </div>
                            <div className='pricing-btn'>VIEW ALL</div>
                        </div>
                    </div>
                    <div className="col-lg-4 offset-lg-1">
                        <div className="pricing-box-two">
                            <h5 className='price-two-pro'>PRO</h5>
                            <div className='main-price-125'><span className='price-125'>$125.</span><span className="price-125-0">00</span></div>
                            <h4 className='price-per-project'>Per Project</h4>
                            <p className='price-box-2-p'>Praesent efficitur sollicitudin diam</p>
                            <p className='price-box-2-p'>at venenatis. Donec volutpat.</p>
                            <p className='price-box-2-pp'>Mauris ac varius elit.</p>
                            <p className='price-box-2-pp'>Aliquam diam neque semper.</p>
                            <p className='price-box-2-pp'>Fusce at magna posuere.</p>
                            <p className='price-box-2-pp'>Cras non eleifend elit.</p>
                            <p className='price-box-2-pp'>Donec interdum metus et.</p>
                            <div className='pricing-btn'>VIEW ALL</div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="pricing-box-two">
                            <h5 className='price-two-pro'>PRO</h5>
                            <div className='main-price-125'><span className='price-125'>$125.</span><span className="price-125-0">00</span></div>
                            <h4 className='price-per-project'>Per Project</h4>
                            <p className='price-box-2-p'>Praesent efficitur sollicitudin diam</p>
                            <p className='price-box-2-p'>at venenatis. Donec volutpat.</p>
                            <p className='price-box-2-pp'>Mauris ac varius elit.</p>
                            <p className='price-box-2-pp'>Aliquam diam neque semper.</p>
                            <p className='price-box-2-pp'>Fusce at magna posuere.</p>
                            <p className='price-box-2-pp'>Cras non eleifend elit.</p>
                            <p className='price-box-2-pp'>Donec interdum metus et.</p>
                            <div className='pricing-btn'>VIEW ALL</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
