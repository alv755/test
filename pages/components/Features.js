import { React, Fragment } from 'react'

import Image from "next/image"
import 'bootstrap/dist/css/bootstrap.min.css';
import HelpIcon from '@material-ui/icons/Help';

function Feature() {
  return (
    <Fragment>
      <div className="core_features">
        <div className="container">
          <div className="border-bottm">
            <div className="row">
              <div className="col-xl-6 col-md-6">
                <div className="featuures_heading">
                  <h3>Core Features</h3>
                </div>
              </div>
              <div className="col-xl-6 col-md-6">
                <div className="featurest_tabs">
                  <nav>
                    <div className="nav" id="nav-tab" role="tablist">
                      <a
                        className="nav-item nav-link active"
                        id="nav-home-tab"
                        data-toggle="tab"
                        href="#nav-home"
                        role="tab"
                        aria-controls="nav-home"
                        aria-selected="true"
                      >Features</a
                      >
                      <a
                        className="nav-item nav-link"
                        id="nav-profile-tab"
                        data-toggle="tab"
                        href="#nav-profile"
                        role="tab"
                        aria-controls="nav-profile"
                        aria-selected="false"
                      >Advanced Features</a
                      >
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  <div className="row">
                    <div className="col-xl-6">
                      <div className="single_features">
                        <div className="icon"> <Image className="p-2" src="/img/icon/domaintransfer.webp" alt="" width="80" height="80" /></div>
                        <div className="features_info">
                          <h4>Free Domain Transfer</h4>
                          <p>
                            Quick and easy - no transfer fee. We will renew your domian for one year free of charge
                        </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="single_features">
                        <div className="icon blue">
                          <Image className="p-2" src="/img/icon/domain.webp" alt="" width="80" height="80" />
                        </div>
                        <div className="features_info">
                          <h4>Cheap Domain</h4>
                          <p>
                            Domain Names starting at Rs.900 Buy your domain now. Make Your Business Online Today.
                        </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="single_features">
                        <div className="icon pink" >   <Image className="p-2 mt-2" src="/img/icon/ssd.webp" alt="" width="60%" height="60" /></div>
                        <div className="features_info">
                          <h4>Pure SSD Storage</h4>
                          <p>
                            Our servers are optimized. Pure SSd and run the best enterprise grade hardware in the industry.
                        </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="single_features">
                        <div className="icon yellow">
                          <Image className="p-2" src="/img/icon/cp.webp" alt="" width="80" height="80" />
                        </div>
                        <div className="features_info">
                          <h4>Powered by cPanel</h4>
                          <p>
                            The most popular and powerful web hosting control panel for easy point and click management fo your hosting amount.
                        </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                >
                  <div className="row">
                    <div className="col-xl-6">
                      <div className="single_features">
                        <div className="icon"><Image className="mt-3" src="/img/icon/ssl.webp" alt="" width="70" height="70" style={{ margintTop: "2rem" }} /></div>
                        <div className="features_info">
                          <h4>Free SSL certificate</h4>
                          <p>
                            We provide free SSL certificate with every web hosting plan. SSL certificate secures your website.
                        </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="single_features">
                        <div className="icon blue">
                          <Image className="p-2" src="/img/icon/weekly.webp" alt="" width="80" height="80" />
                        </div>
                        <div className="features_info">
                          <h4>Daily And Weekly Backup</h4>
                          <p>
                            Free daily and weekly backups of your data to keep you safe. When others charge for this, we don't.
                        </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="single_features">
                        <div className="icon pink"><Image className="p-2" src="/img/icon/247.webp" alt="" width="60" height="60" /></div>
                        <div className="features_info">
                          <h4>Free 24/7 Priority Support</h4>
                          <p>
                            Because there is no great hosting without great technical support that cares about your websites
                        </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="single_features">
                        <div className="icon yellow">
                          <Image className="p-2" src="/img/icon/moneyback.webp" alt="" width="80" height="80" />
                        </div>
                        <div className="features_info">
                          <h4>100% Satisfaction or Money Back Guarantee</h4>
                          <p>
                            45 days money-back guarantee for Cloud Shared Hosting and 7 days fir VPS?DNS server.
                        </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dedicated_support support_bg">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-md-8">
              <div className="support_info">
                <h3>24h Dedicated Support</h3>
                <p>
                  Our set he for firmament morning sixth subdue darkness creeping
                  gathered divide our let god moving. Moving in fourth air night
                  bring upon you’re it beast.
              </p>
                <div className="get_started">
                  <a className="boxed_btn_green" href="#">
                    <span>Get Start Now</span>
                  </a>
                  <a href="#" className="phone_num"> +10 267 367 678 2678 </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </Fragment>

  )
}

export default Feature
