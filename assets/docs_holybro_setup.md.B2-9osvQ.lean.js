import{_ as t,a as o,b as r,c as i,d as a,e as n,f as l}from"./chunks/moter.Ba4sfMyY.js";import{_ as s,c as p,a0 as d,o as c}from"./chunks/framework.E9geiPbv.js";const h="/drone-in-a-box/assets/holybroDrone/pixhawk_usb_connection.png",u="/drone-in-a-box/assets/holybroDrone/Pixhawk_ConnectWithMP.png",m="/drone-in-a-box/assets/holybroDrone/Pixhawk_InstallFirmware.jpg",g="/drone-in-a-box/assets/holybroDrone/Pixhawk_InstallFirmware2.png",f="/drone-in-a-box/assets/holybroDrone/MP-fullparams.png",b="/drone-in-a-box/assets/holybroDrone/mp_accelerometer_calibration.png",y="/drone-in-a-box/assets/holybroDrone/accel-calib-positions-e1376083327116.jpg",q=JSON.parse('{"title":"Garuda Mini Drone Setup Guide","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"docs/holybro/setup.md","filePath":"docs/holybro/setup.md"}'),w={name:"docs/holybro/setup.md"};function x(C,e,_,k,P,S){return c(),p("div",null,e[0]||(e[0]=[d('<h1 id="garuda-mini-drone-setup-guide" tabindex="-1">Garuda Mini Drone Setup Guide <a class="header-anchor" href="#garuda-mini-drone-setup-guide" aria-label="Permalink to &quot;Garuda Mini Drone Setup Guide&quot;">​</a></h1><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><div class="margin"><p>This guide provides detailed steps to set up your Garuda Mini drone using Ardupilot firmware. Since the drone is large and not easily connected to a laptop or PC, we will use a telemetry module for wireless communication. This will allow you to calibrate the drone and access telemetry data efficiently.</p></div><h2 id="step-1-choose-firmware-type" tabindex="-1">Step 1: Choose Firmware Type <a class="header-anchor" href="#step-1-choose-firmware-type" aria-label="Permalink to &quot;Step 1: Choose Firmware Type&quot;">​</a></h2><p><strong>Ardupilot Firmware</strong></p><div class="margin"><p>Ardupilot is a robust open-source firmware designed for various types of drones, supporting advanced features like autonomous flight, waypoint navigation, and mission planning. It is continuously updated by a dedicated community. Download the latest version suitable for your flight controller from the official Ardupilot repository.</p></div><h2 id="step-2-choose-flight-controller-type" tabindex="-1">Step 2: Choose Flight Controller Type <a class="header-anchor" href="#step-2-choose-flight-controller-type" aria-label="Permalink to &quot;Step 2: Choose Flight Controller Type&quot;">​</a></h2><p>Select the appropriate flight controller for your drone. Examples include:</p><ul><li>Pixhwak 6C X500 V2</li></ul><h2 id="step-3-cable-connections" tabindex="-1">Step 3: Cable Connections <a class="header-anchor" href="#step-3-cable-connections" aria-label="Permalink to &quot;Step 3: Cable Connections&quot;">​</a></h2><ol><li><p><strong><a href="https://ardupilot.org/planner/docs/mission-planner-installation.html" target="_blank" rel="noreferrer">Install Mission Planner Software:</a></strong></p><ul><li>Open Mission Planner.</li><li>Select the correct COM port for the telemetry module.</li><li>Click <strong>Connect</strong> to establish communication with the drone ensure drone is power on.</li></ul></li><li><p>Connect the data cable to Flight Controller Pixhwak 6C X500 V2.</p></li></ol><div style="display:flex;justify-content:center;align-items:center;gap:20px;"><img src="'+h+'" alt="Pixhawk USB Connection" style="width:50%;"><img src="'+u+'" alt="Pixhawk Connection with MP" style="height:100%;"></div><h2 id="step-4-flash-firmware-to-flight-controller" tabindex="-1">Step 4: Flash Firmware to Flight Controller <a class="header-anchor" href="#step-4-flash-firmware-to-flight-controller" aria-label="Permalink to &quot;Step 4: Flash Firmware to Flight Controller&quot;">​</a></h2><ul><li><p><em><a href="https://ardupilot.org/planner/docs/common-loading-firmware-onto-pixhawk.html" target="_blank" rel="noreferrer">Refer to Ardupilot documentation</a>.</em></p></li><li><p><strong>Using Mission Planner (<code>.apj</code>)</strong></p><div class="flex-setup"><p><strong>Step 1:</strong> Open Mission Planner and Go to Initial Setup -&gt; Install Firmware .</p><p><strong>Step 2:</strong> Select Com Port and Check if Visible DO NOT CONNECT IT.&quot;</p><p><strong>Step 3:</strong> Ensure Internet is Connected to your Laptop and Click on QuadCoptor Select Pixhwak6x and Download the Firmware.</p></div></li><li><p><img src="'+m+'" alt="alt text"></p></li><li><p><img src="'+g+'" alt="alt text"></p></li></ul><h2 id="step-5-connect-telemetry-module" tabindex="-1">Step 5: Connect Telemetry Module <a class="header-anchor" href="#step-5-connect-telemetry-module" aria-label="Permalink to &quot;Step 5: Connect Telemetry Module&quot;">​</a></h2><ol><li><strong>Connect the Telemetry Module:</strong><ul><li>Connect the telemetry module to your flight controller.</li><li>Connect other telemetry module to your Laptop.</li></ul></li></ol><h2 id="step-6-configure-parameters" tabindex="-1">Step 6: Configure Parameters <a class="header-anchor" href="#step-6-configure-parameters" aria-label="Permalink to &quot;Step 6: Configure Parameters&quot;">​</a></h2><p><strong>Navigate to Config in the Navigation Bar:</strong></p><ul><li>Select <strong>Full Parameter List</strong>.</li><li>Click <strong>Load From File</strong> and upload the parameter file <a href="/assets/holybroDrone/garudaMiniStable.param" download><code>GarudaMini.param</code></a>.</li><li>Confirm the upload by clicking <strong>Write parameters</strong>.</li><li><img src="'+f+'" alt="alt text"></li></ul><h2 id="step-7-calibrate-test-drone" tabindex="-1">Step 7: Calibrate &amp; Test Drone <a class="header-anchor" href="#step-7-calibrate-test-drone" aria-label="Permalink to &quot;Step 7: Calibrate &amp; Test Drone&quot;">​</a></h2><ol><li><p><strong>Connect to Mission Planner:</strong></p><ul><li>Open Mission Planner and connect via the telemetry module.</li></ul></li><li><p><strong><a href="https://ardupilot.org/copter/docs/common-accelerometer-calibration.html#id2" target="_blank" rel="noreferrer">Accelerometer Calibration</a></strong></p><ul><li>Go to the Setup Icon, then &quot;Accel Calibration.&quot;</li><li>Follow prompts for 3-axis calibration and confirm success.</li><li><img src="'+b+'" alt="alt text"></li><li><img src="'+y+'" alt="alt text"></li></ul></li><li><p><strong><a href="https://ardupilot.org/copter/docs/common-compass-calibration-in-mission-planner.html" target="_blank" rel="noreferrer">Compass Calibration</a></strong></p><div class="margin"><p>Select <strong>Compass</strong> from the left panel in <strong>Mandatory Hardware</strong>.</p><p>Untick <strong>Use Compass 2</strong> and <strong>Use Compass 3</strong>.</p><p>Click on the Start Button.</p><p>Hold the vehicle in the air and rotate it so that each side (Nose Up, Nose Down, left, right, top, and bottom) points down towards the Earth for a few seconds. Consider performing a full 360-degree turn with each orientation pointing towards the ground. This may require multiple turns to confirm calibration or to retry if it initially does not pass.</p></div></li><li><p><strong><a href="https://ardupilot.org/planner/docs/common-radio-control-calibration.html#common-radio-control-calibration" target="_blank" rel="noreferrer">Radio Calibration</a></strong></p><ul><li>On your RadioMaster, select the Drone Model and ensure it is connected to the drone.</li><li><span class="note"><strong>Note:</strong> Ensure the battery is not connected.</span></li><li>Select &quot;Radio Calibration&quot; from the left panel in <strong>Mandatory Hardware</strong>.</li><li>Move the controller stick; you should see the minimum and maximum levels of RC channels.</li><li>Ensure it is increasing and decreasing according to the stick movements; otherwise, refer to the documentation.</li></ul></li></ol><br><img src="'+t+'" alt="radioCalibration1" style="max-width:100%;height:auto;border-radius:10px;margin-top:10px;"><br><img src="'+o+'" alt="radioCalibration2" style="max-width:100%;height:auto;border-radius:10px;margin-top:10px;"><br><img src="'+r+'" alt="radioCalibration3" style="max-width:100%;height:auto;border-radius:10px;margin-top:10px;"><br><img src="'+i+'" alt="radioCalibration4" style="max-width:100%;height:auto;border-radius:10px;margin-top:10px;"><br><ol start="5"><li><p><strong>Flight Mode</strong></p><ul><li>Select the <code>Flight Modes</code> option in Mandatory Hardware.</li><li>On your Radio Master, there is a second button labeled <code>SB</code> on the top left corner with a tri-state output.</li><li><img src="'+a+'" alt="Flight Mode" style="max-width:100%;height:auto;border-radius:10px;margin-top:10px;"></li><li>You will see that switching the buttons changes the mode highlighted in green in Mission Planner.</li><li>Select the appropriate mode, or keep it as default. The safest mode is <code>AltHold</code>.</li></ul></li><li><p><strong><a href="https://ardupilot.org/copter/docs/connect-escs-and-motors.html" target="_blank" rel="noreferrer">Motor Test</a></strong></p><ul><li>Ensure safety protocols are followed.</li><li><span class="note"><strong>Note:</strong> Remove Properllers of the drone and then insert a battery.</span></li><li><span class="note"><strong>Note:</strong> Turn off the RC receiver and Remove the Propellers of drone to ensure safety.</span></li><li>In the Optional Hardware section, open &quot;Motor Test.&quot;</li><li>The direction of the propeller is explained in the diagram below.</li><li><img src="'+n+'" alt="Motor Direction Legend" style="max-width:100%;height:auto;border-radius:10px;margin-top:10px;"></li><li>The drone frame type is Betaflight X, so the direction of propellers is shown below.</li><li><img src="'+l+'" alt="Motor Direction" style="max-width:50%;height:50%;border-radius:10px;margin-top:10px;"></li><li>Click the &quot;Test Motor&quot; [<code>option</code>] and ensure the direction mentioned in Mission Planner matches the diagram above.peller directions.</li></ul></li></ol><h2 id="additional-resources" tabindex="-1">Additional Resources <a class="header-anchor" href="#additional-resources" aria-label="Permalink to &quot;Additional Resources&quot;">​</a></h2><ul><li><a href="https://ardupilot.org/" target="_blank" rel="noreferrer">Ardupilot Documentation</a></li><li><a href="https://ardupilot.org/planner/docs/mission-planner-installation.html" target="_blank" rel="noreferrer">Mission Planner User Guide</a></li></ul><hr><p><strong><span class="note">Note:</span></strong> Always follow safety protocols during setup and testing to prevent damage to your drone or personal injury.</p>',35)]))}const F=s(w,[["render",x]]);export{q as __pageData,F as default};