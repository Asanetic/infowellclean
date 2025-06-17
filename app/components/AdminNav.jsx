'use client';

import React, { useEffect, useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { mosyGetLSData, dayTime } from '../MosyUtils/hiveUtils';
import saAuthConfigs from '../auth/featureConfig/saAuthConfigs';
import {destroyAppSession} from '../auth/AuthUtils';

import {hiveRoutes} from '../appConfigs/hiveRoutes'; 
import initSidebarControls from './initSideBarControl'

export default function NavSidebar({
  appName = 'MosyApp',
  appLogo = '/img/sampleimg1.jpg',
  userAvatar = '/img/useravatar.png',
  appLogoStyle = { height: '50px', width: 'auto', marginRight: '20px' },
  indexPage = '/',
  commonRoot = ''
}) {
  const { sessionPrefix, usernameCol } = saAuthConfigs;
  const cookieKey = `${sessionPrefix}_sa_authsess_${usernameCol}_val`;

  const [username, setUsername] = useState('User');
  
  useEffect(() => {
    const usernameRaw = mosyGetLSData(cookieKey);
    if (usernameRaw) {
      setUsername(usernameRaw.split(' ')[0]);
    }

    initSidebarControls();


  }, []); // Empty dependency array ensures this runs only on the client side


  const userRole = 'User';
  const notificationCount = 0;
  const navRoutes = hiveRoutes;

  return (
    <>
      <div className="header">
        <div className="header-left d-lg-none">
          <a className="mobile_btn cpointer" id="mobile_btn">
            <i className="fa fa-bars" />
          </a>
          <span id="toggle_btn" className="cpointer">
            <i className="fe fe-text-align-left" />
          </span>
          <Link href={indexPage} className="logo logo-small text-dark" style={{ marginLeft: '-100px' }}>
            <Image src={appLogo} alt="Logo" style={appLogoStyle} width={30} height={30} />
            <span className="bold h5">{appName}</span>
          </Link>
        </div>

        <div className="top-nav-search pt-2">
          <Link href={indexPage} className="logo text-dark">
            <Image src={appLogo} alt="Logo" style={appLogoStyle} width={30} height={30} />
            <span className="bold h5">{appName}</span>
          </Link>
        </div>

        <ul className="nav user-menu">
          <li className="nav-item dropdown has-arrow">
            <a href="#" className="dropdown-toggle nav-link" data-bs-toggle="dropdown">
              <span className="text-primary mr-2">Good {dayTime()} {username}</span>
              <span className="user-img">
                <Image
                  className="rounded-circle"
                  src={userAvatar}
                  width={31}
                  height={31}
                  alt="Avatar"
                />
              </span>
            </a>
            <div className="dropdown-menu">
              <div className="user-header">
                <div className="avatar avatar-sm">
                  <Image
                    src={userAvatar}
                    alt="User Image"
                    className="avatar-img rounded-circle"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="user-text">
                  <h6>{username}</h6>
                  <p className="text-muted mb-0">{userRole}</p>
                </div>
              </div>
              <a className="dropdown-item d-none" href="/adminaccount">My Profile</a>
              <Link className="dropdown-item" href={`${hiveRoutes.infowell}/chat`}>
               <i className='mr-2 fa fa-comment'></i>Smart Chat
              </Link>
              <Link className="dropdown-item" href={`${hiveRoutes.infowell}/snippets/list`}>
               <i className='mr-2 fa fa-copy'></i> Notes
              </Link>
              <Link className="dropdown-item" href={`${hiveRoutes.infowell}/snippets/readlist`}>
               <i className='mr-2 fa fa-book'></i> Read list
              </Link>              
              <Link className="dropdown-item" href={`${hiveRoutes.infowell}/ai/list`}>
              <i className='mr-2 fa fa-bolt'></i> Agents</Link>
              <a
                className="dropdown-item cpointer"
                onClick={() => {
                    destroyAppSession();
                  
                }}
              >
                Logout <i className='ml-2 fa fa-arrow-right'></i>
              </a>
            </div>
          </li>
        </ul>
      </div>

      <div className="sidebar d-none" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
            <li className="menu-title p-4"> </li>
              
              <li className="submenu">
                <a href="#"><i className="fa fa-line-chart"></i> <span> Dashboard </span> <span className="menu-arrow"></span></a>
                <ul style={{display: "none"}} >
                  <li><a className="nav-link" href={`${hiveRoutes.octaneorbit}/dashboard/overview`}>Overview</a></li>
                  <li><a className="nav-link" href={`${hiveRoutes.octaneorbit}/dashboard/realtime-metrics`}>Real-Time Metrics</a></li>
                  <li><a className="nav-link" href={`${hiveRoutes.octaneorbit}/dashboard/detection`}>Smart analytics</a></li>
                </ul>
               </li> 
              <li className="submenu">
                <a href="#"><i className="fa fa-file-text"></i> <span> Fuel stock </span> <span className="menu-arrow"></span></a>
                <ul style={{display: "none"}} >
                  <li><a className="nav-link" href={`${hiveRoutes.octaneorbit}/inventory/fuel_profile`}>Add inventory</a></li>
                  <li><a className="nav-link" href={`${hiveRoutes.octaneorbit}/inventory/fuel`}>Manage inventory</a></li>
                </ul>
               </li>              
              <li className="submenu">
                <a href="#"><i className="fa fa-list"></i> <span> Fuel stations </span> <span className="menu-arrow"></span></a>
                <ul style={{display: "none"}} >
                  <li><a className="nav-link" href={`${hiveRoutes.octaneorbit}/stations/station_profile`}>Add station</a></li>
                  <li><a className="nav-link" href={`${hiveRoutes.octaneorbit}/stations/list`}>Manage stations</a></li>
                </ul>
               </li> 
              <li className="submenu">
                <a href="#"><i className="fa fa-bolt"></i> <span> Fuel pumps </span> <span className="menu-arrow"></span></a>
                <ul style={{display: "none"}} >
                  <li><a className="nav-link" href={`${hiveRoutes.octaneorbit}/pumps/profile`}>Add pumps</a></li>
                  <li><a className="nav-link" href={`${hiveRoutes.octaneorbit}/pumps/list`}>Manage pumps</a></li>
                </ul>
               </li>  
    
              <li className="submenu">
                <a href="#"><i className="fa fa-desktop"></i> <span> Sales </span> <span className="menu-arrow"></span></a>
                <ul style={{display: "none"}} >
                  <li><a className="nav-link" href={`${hiveRoutes.octaneorbit}/sales/profile`}>Add sales</a></li>
                  <li><a className="nav-link" href={`${hiveRoutes.octaneorbit}/sales`}>Manage sales</a></li>
                </ul>
               </li> 
              
               <li className="submenu">
                <a href="#"><i className="fa fa-bank"></i> <span> Banking </span> <span className="menu-arrow"></span></a>
                <ul style={{display: "none"}} >
                  <li><a className="nav-link" href={`${hiveRoutes.octaneorbit}/banking/profile`}>Record deposits</a></li>
                  <li><a className="nav-link" href={`${hiveRoutes.octaneorbit}/banking/list`}>Deposit history</a></li>
                </ul>
               </li> 

              <li className="submenu">
                <a href="#"><i className="fa fa-truck"></i> <span> Deliveries </span> <span className="menu-arrow"></span></a>
                <ul style={{display: "none"}} >
                  <li><a className="nav-link" href={`${hiveRoutes.octaneorbit}/deliveries/profile`}>Record delivery</a></li>
                  <li><a className="nav-link" href={`${hiveRoutes.octaneorbit}/deliveries`}>Manage delivery</a></li>
                  <li><a className="nav-link" href={`${hiveRoutes.octaneorbit}/fleet`}>Manage fleet</a></li>
                </ul>
               </li>
              
              <li className="submenu">
                <a href="#"><i className="fa fa-users"></i> <span> Clients </span> <span className="menu-arrow"></span></a>
                <ul style={{display: "none"}} >
                  <li><a className="nav-link" href={`${hiveRoutes.octaneorbit}/clients/profile`}>Add client</a></li>
                  <li><a className="nav-link" href={`${hiveRoutes.octaneorbit}/clients/list`}>Manage clients</a></li>
                </ul>
               </li>
              
              <li className="submenu">
                <a href="#"><i className="fa fa-copy"></i> <span> Suppliers </span> <span className="menu-arrow"></span></a>
                <ul style={{display: "none"}} >
                  <li><a className="nav-link" href={`${hiveRoutes.octaneorbit}/suppliers/profile`}>Add supplier</a></li>
                  <li><a className="nav-link" href={`${hiveRoutes.octaneorbit}/suppliers/list`}>Manage suppliers</a></li>
                </ul>
               </li> 
    
              <li className="submenu">
                <a href="#"><i className="fa fa-user"></i> <span> Staff </span> <span className="menu-arrow"></span></a>
                <ul style={{display: "none"}} >
                  <li><a className="nav-link" href={`${hiveRoutes.octaneorbit}/staff/profile`}>Add staff</a></li>
                  <li><a className="nav-link" href={`${hiveRoutes.octaneorbit}/staff`}>Manage staff</a></li>
                </ul>
               </li> 
    
              <li className="submenu">
                <a href="#"><i className="fa fa-gear"></i> <span> System settings </span> <span className="menu-arrow"></span></a>
                <ul style={{display: "none"}} >
                  <li><a className="nav-link" href={`${hiveRoutes.octaneorbit}/sysusers/profile`}>Add users</a></li>
                  <li><a className="nav-link" href={`${hiveRoutes.octaneorbit}/sysusers`}>Manage users</a></li>
                </ul>
               </li> 
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
