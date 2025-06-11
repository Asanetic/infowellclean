'use client';

import React from 'react';
import MainLoginInputs from './MainLoginInputs';

export default function SplitCardLoginForm({
  loginBgImg = '',
  appLogo = '',
  appName = 'App',
  showResetLink = false,
  changePasswordUrl = '#',
  showCreateAccount = false,
  registerUrl = '#',
}) {
  return (
    <div className="elforge_login_v2_wrapper">
      <div className="elforge_login_card shadow-lg rounded-4 overflow-hidden">
        <div className="elforge_login_left">
          <div
            className="elforge_login_bg"
            style={{ backgroundImage: `url('${loginBgImg}')` }}
          />
        </div>

        <div className="elforge_login_right">
          <div className="elforge_login_content">
            <MainLoginInputs
              showCreateAccount={showCreateAccount}
              appName={appName}
              appLogo={appLogo}
              showResetLink={showResetLink}
              changePasswordUrl={changePasswordUrl}
              registerUrl={registerUrl}
            />
            <div className="pt-3" id="alert_box" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .elforge_login_v2_wrapper {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f8f9fa;
          padding: 1rem;
        }

        .elforge_login_card {
          display: flex;
          width: 100%;
          max-width: 960px;
          background: #fff;
          min-height: 500px;
        }

        .elforge_login_left,
        .elforge_login_right {
          flex: 1;
        }

        .elforge_login_bg {
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
        }

        .elforge_login_right {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          background-color: #ffffff;
        }

        .elforge_login_content {
          width: 100%;
          max-width: 400px;
        }

        @media (max-width: 768px) {
          .elforge_login_card {
            flex-direction: column;
            min-height: auto;
          }

          .elforge_login_left {
            height: 200px;
          }
        }
      `}</style>
    </div>
  );
}
