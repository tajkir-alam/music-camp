import React from 'react';
import SectionTitle from '../../../Components/SectionTitle';

const FAQ = () => {
    return (
        <section className="custom-container mb-12">
            <SectionTitle
                heading={'Frequently Ask Question'}
                subHeading={'Easy To Get Common Answers'}
            />
            <div className="join join-vertical w-full">
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                        Why Should I join Music Camp?
                    </div>
                    <div className="collapse-content">
                        <p>
                            Music camp provide you high quality instructors with 2 time daily support.
                        </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                        After complete my classes will I able to take extra support?
                    </div>
                    <div className="collapse-content">
                        <p>
                            Yes, You can take support after your classes ends. We encourage you to take support from us at any time.
                        </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                        Am I getting any certificate?
                    </div>
                    <div className="collapse-content">
                        <p>
                            If you complete your classes and assignments then you will get a certificate.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;