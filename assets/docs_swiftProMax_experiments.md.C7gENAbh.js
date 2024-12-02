import{_ as e}from"./chunks/modes.DIEVMJo3.js";import{_ as o}from"./chunks/FM.0ZfBYg9l.js";import{_ as i,c as l,a0 as d,o as r}from"./chunks/framework.BOr1CWtK.js";const a="/assets/setup/EKF.png",_=JSON.parse('{"title":"Swift Pro Max Experiments","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"docs/swiftProMax/experiments.md","filePath":"docs/swiftProMax/experiments.md"}'),n={name:"docs/swiftProMax/experiments.md"};function s(h,t,c,u,m,p){return r(),l("div",null,t[0]||(t[0]=[d('<h1 id="swift-pro-max-experiments" tabindex="-1">Swift Pro Max Experiments <a class="header-anchor" href="#swift-pro-max-experiments" aria-label="Permalink to &quot;Swift Pro Max Experiments&quot;">​</a></h1><h2 id="how-to-fly" tabindex="-1">How to Fly!! <a class="header-anchor" href="#how-to-fly" aria-label="Permalink to &quot;How to Fly!!&quot;">​</a></h2><ul><li>Anyone who flies the drone need to know proper piloting before flying the drone.</li></ul><div class="flex-setup"><p><strong>Disclaimer : </strong> In any case if you miss to follow the instruction manual, e-Yantra is not responsible for any loss.</p><p><strong>Important Note :</strong>First learn to fly in simulator ex. LiftOff for atleast 50 to 60 hours and first flight should be in Stabalize Mode.</p></div><h2 id="ensure-your-setup-is-complete" tabindex="-1">Ensure Your Setup is Complete <a class="header-anchor" href="#ensure-your-setup-is-complete" aria-label="Permalink to &quot;Ensure Your Setup is Complete&quot;">​</a></h2><ul><li>Confirm that your setup is complete.</li><li>Select the Swift Pro Max model on your Radio Master.</li><li>Verify that the Cellular Tower is visible on the Swift Pro Max screen.</li><li>Ensure the drone can be armed and disarmed properly.</li></ul><img src="'+e+'" alt="Modes" style="max-width:50%;height:50%;border-radius:10px;margin-top:10px;"><ul><li><p>The SA button controls the Arm/Disarm function.</p><ul><li><strong>SA Switch UP</strong>: Disarm State.</li><li><strong>SA Switch DOWN</strong>: Arm State.</li></ul></li><li><p>The SB button controls the Flight Modes.</p><ul><li><strong>SB Switch UP</strong>: Stabilize Mode.</li><li><strong>SB Switch CENTER</strong>: AltHold Mode.</li><li><strong>SB Switch DOWN</strong>: FlowHold Mode.</li></ul></li></ul><h2 id="how-to-set-flight-modes-on-rc-buttons" tabindex="-1">How to set Flight modes on RC buttons. <a class="header-anchor" href="#how-to-set-flight-modes-on-rc-buttons" aria-label="Permalink to &quot;How to set Flight modes on RC buttons.&quot;">​</a></h2><ul><li>Connect the Drone via USB wire.</li><li>And also Power on the Radio Master and connect to the drone.</li><li>Go to <code>Mission Planner</code> and connect it.</li><li>Go to <code>SETUP</code> --&gt; <code>Flight Modes</code>.</li></ul><img src="'+o+'" alt="FM" style="max-width:100%;height:50%;border-radius:10px;margin-top:10px;"><ul><li>If you have booted Custom Firmware you can use FlowHold Mode.</li><li>Just see by switching <code>SB</code> key on RadioMaster Boxer the Flight mode changes from <code>Flight Mode 1</code> to <code>Flight Mode 4</code> to <code>Flight Mode 6</code>.</li><li>Set whatever you want but for safety keep Stabalize Mode so that if drone doesn&#39;t response properly you can quickly switch to stabilize mode and take a manual control.</li></ul><h2 id="important-note-for-switching-from-flowhold-to-loiter-or-poshold-mode" tabindex="-1">Important Note for switching from FlowHold to Loiter or PosHold Mode. <a class="header-anchor" href="#important-note-for-switching-from-flowhold-to-loiter-or-poshold-mode" aria-label="Permalink to &quot;Important Note for switching  from FlowHold to Loiter or PosHold Mode.&quot;">​</a></h2><ul><li><p>FlowHold mode uses <strong><code>Optical flow</code></strong> sensor to gets its Velocity in XY plane.</p></li><li><p>PosHold or Loiter mode uses <strong><code>GPS</code></strong> sensor to gets its Velocity in XY plane.</p></li><li><p>And Ardupilot uses Extended Kalman Filter (EKF) where it uses <code>SRC1</code> to get values from sensors, if not getting good values it switches to <code>SRC2</code> and same for <code>SRC3</code>, this is the sensor fusion.</p></li><li><p>So in Loiter or PosHold we should use EKF_SRC1_VELXY : GPS, EKF_SRC2_VELXY : GPS, EKF_SRC3_VELXY : None.</p></li><li><p>And in FlowHold we should use EKF_SRC1_VELXY : OpticalFlow, EKF_SRC2_VELXY : GPS, EKF_SRC3_VELXY : None.</p></li></ul><img src="'+a+'" alt="ekf" style="max-width:100%;height:50%;border-radius:10px;margin-top:10px;"><h3 id="a-setting-paramaters-for-flowhold-option-only-for-custom-firmware" tabindex="-1">A. Setting Paramaters for FlowHold (Option only for Custom Firmware). <a class="header-anchor" href="#a-setting-paramaters-for-flowhold-option-only-for-custom-firmware" aria-label="Permalink to &quot;A. Setting Paramaters for FlowHold (Option only for Custom Firmware).&quot;">​</a></h3><ul><li><p>Go to <code>Mission Planner</code> --&gt; <code>Config</code> --&gt; <code>Full Parmeter List</code> --&gt; <code>EK3</code> --&gt; <code>EK3_SRC1</code>.</p></li><li><p>Set the values accourdingly as shown in table below.</p></li><li><p>Go to <code>EK3</code> --&gt; <code>EK3_SRC1</code>.</p></li></ul><table tabindex="0"><thead><tr><th>Paramaters</th><th>Values</th><th>Options</th></tr></thead><tbody><tr><td>EK3_SRC1_POSXY</td><td>3</td><td>GPS</td></tr><tr><td>EK3_SRC1_POSZ</td><td>2</td><td>RangeFinder</td></tr><tr><td>EK3_SRC1_VELXY</td><td>5</td><td>OpticalFlow</td></tr><tr><td>EK3_SRC1_VELXY</td><td>3</td><td>GPS</td></tr><tr><td>EK3_SRC1_YAW</td><td>1</td><td>Compass</td></tr></tbody></table><ul><li>Go to <code>EK3</code> --&gt; <code>EK3_SRC2</code>.</li></ul><table tabindex="0"><thead><tr><th>Paramaters</th><th>Values</th><th>Options</th></tr></thead><tbody><tr><td>EK3_SRC2_POSXY</td><td>3</td><td>GPS</td></tr><tr><td>EK3_SRC2_POSZ</td><td>1</td><td>Baro</td></tr><tr><td>EK3_SRC2_VELXY</td><td>3</td><td>GPS</td></tr><tr><td>EK3_SRC2_VELXY</td><td>3</td><td>GPS</td></tr><tr><td>EK3_SRC2_YAW</td><td>1</td><td>Compass</td></tr></tbody></table><ul><li>Go to <code>EK3</code> --&gt; <code>EK3_SRC3</code>.</li></ul><table tabindex="0"><thead><tr><th>Paramaters</th><th>Values</th><th>Options</th></tr></thead><tbody><tr><td>EK3_SRC3_POSXY</td><td>0</td><td>None</td></tr><tr><td>EK3_SRC3_POSZ</td><td>1</td><td>Baro</td></tr><tr><td>EK3_SRC3_VELXY</td><td>0</td><td>None</td></tr><tr><td>EK3_SRC3_VELXY</td><td>0</td><td>None</td></tr><tr><td>EK3_SRC3_YAW</td><td>0</td><td>None</td></tr></tbody></table><ul><li>After setting this paramater do perss <code>Write Params</code> on right panel and confirm <code>ok</code> all the changes.</li></ul><h3 id="b-setting-paramaters-for-loiter-and-poshold" tabindex="-1">B. Setting Paramaters for Loiter and PosHold. <a class="header-anchor" href="#b-setting-paramaters-for-loiter-and-poshold" aria-label="Permalink to &quot;B. Setting Paramaters for Loiter and PosHold.&quot;">​</a></h3><ul><li><p>Go to <code>Mission Planner</code> --&gt; <code>Config</code> --&gt; <code>Full Parmeter List</code> --&gt; <code>EK3</code> --&gt; <code>EK3_SRC1</code>.</p></li><li><p>Set the values accourdingly as shown in table below.</p></li><li><p>Go to <code>EK3</code> --&gt; <code>EK3_SRC1</code>.</p></li></ul><table tabindex="0"><thead><tr><th>Paramaters</th><th>Values</th><th>Options</th></tr></thead><tbody><tr><td>EK3_SRC1_POSXY</td><td>3</td><td>GPS</td></tr><tr><td>EK3_SRC1_POSZ</td><td>2</td><td>RangeFinder</td></tr><tr><td>EK3_SRC1_VELXY</td><td>3</td><td>GPS</td></tr><tr><td>EK3_SRC1_VELXY</td><td>3</td><td>GPS</td></tr><tr><td>EK3_SRC1_YAW</td><td>1</td><td>Compass</td></tr></tbody></table><ul><li>Go to <code>EK3</code> --&gt; <code>EK3_SRC2</code>.</li></ul><table tabindex="0"><thead><tr><th>Paramaters</th><th>Values</th><th>Options</th></tr></thead><tbody><tr><td>EK3_SRC2_POSXY</td><td>3</td><td>GPS</td></tr><tr><td>EK3_SRC2_POSZ</td><td>1</td><td>Baro</td></tr><tr><td>EK3_SRC2_VELXY</td><td>3</td><td>GPS</td></tr><tr><td>EK3_SRC2_VELXY</td><td>3</td><td>GPS</td></tr><tr><td>EK3_SRC2_YAW</td><td>1</td><td>Compass</td></tr></tbody></table><ul><li>Go to <code>EK3</code> --&gt; <code>EK3_SRC3</code>.</li></ul><table tabindex="0"><thead><tr><th>Paramaters</th><th>Values</th><th>Options</th></tr></thead><tbody><tr><td>EK3_SRC3_POSXY</td><td>0</td><td>None</td></tr><tr><td>EK3_SRC3_POSZ</td><td>1</td><td>Baro</td></tr><tr><td>EK3_SRC3_VELXY</td><td>0</td><td>None</td></tr><tr><td>EK3_SRC3_VELXY</td><td>0</td><td>None</td></tr><tr><td>EK3_SRC3_YAW</td><td>0</td><td>None</td></tr></tbody></table><ul><li>After setting this paramater do perss <code>Write Params</code> on right panel and confirm <code>ok</code> all the changes.</li></ul><h2 id="_1-fly-in-stabilize-mode" tabindex="-1">1. Fly in Stabilize Mode <a class="header-anchor" href="#_1-fly-in-stabilize-mode" aria-label="Permalink to &quot;1. Fly in Stabilize Mode&quot;">​</a></h2><ul><li>This mode is essential for all other flight modes.</li><li><strong>Prerequisite</strong>: <em>Learn to fly a drone using a simulator. Aim for about 40-50 hours of practice. You can use the <a href="https://store.steampowered.com/app/410340/Liftoff_FPV_Drone_Racing/" target="_blank" rel="noreferrer">Liftoff Simulator</a>.</em></li></ul><p>Once you&#39;ve learned to fly, follow these steps while prioritizing safety:</p><ol><li>Ensure the throttle stick is down and the roll/pitch is centered.</li><li>Pull the SA switch down (SA: DOWN) to arm the drone.</li><li>Keep the SB switch up (SB: UP) in Stabilize Mode initially.</li><li>Gradually increase the throttle to lift off and land.</li><li>As you gain confidence, practice performing roll and pitch maneuvers.</li><li>After some practice, you’ll be ready to fly in different modes.</li></ol><h2 id="_2-fly-in-althold-mode" tabindex="-1">2. Fly in AltHold Mode <a class="header-anchor" href="#_2-fly-in-althold-mode" aria-label="Permalink to &quot;2. Fly in AltHold Mode&quot;">​</a></h2><ul><li><strong>Prerequisite</strong>: You must master Stability Mode to maintain manual control if the drone goes out of control.</li><li>Once you&#39;re proficient in Stability Mode, you can move to AltHold Mode.</li></ul><ol><li>Ensure the throttle stick is down and the roll/pitch is centered.</li><li>Pull the SA switch down (SA: DOWN) to arm the drone.</li><li>Set the SB switch to center (SB: CENTER) for AltHold Mode.</li></ol><p><strong>Key Points</strong>:</p><ul><li>In AltHold mode, you provide velocity rather than angles. At 0% throttle, the drone will begin to decelerate based on the settings in the full parameter list.</li><li>At 50% throttle, the drone will maintain its current position.</li><li>At 100% throttle, it will climb at the rate specified in the parameter list.</li><li>Between 0-50%, the throttle maps speed from 0 to maximum deceleration.</li><li>Between 50-100%, it maps speed from 0 to maximum acceleration.</li><li>Gradually increase the throttle to lift off and land.</li><li>This mode will automatically level the drone, but you still need to manage roll and pitch.</li></ul><p>The RangeFinder operates effectively up to 120 cm from the ground; beyond that, the barometer takes over due to sensor limitations. If the drone becomes unmanageable, switch back to Stability Mode (SB: UP) to regain control.</p><h2 id="_3-fly-in-flowhold-mode" tabindex="-1">3. Fly in FlowHold Mode <a class="header-anchor" href="#_3-fly-in-flowhold-mode" aria-label="Permalink to &quot;3. Fly in FlowHold Mode&quot;">​</a></h2><div class="flex-setup"><p><strong>Disclaimer:</strong> Requires good texture surface for optical flow sensor.</p></div><ul><li><strong>Prerequisite</strong>: You must master Stability Mode to maintain manual control if the drone goes out of control.</li><li>Once you&#39;re proficient in Stability Mode, you can move to FlowHold Mode.</li></ul><ol><li>Ensure the throttle stick is down and the roll/pitch is centered.</li><li>Pull the SA switch down (SA: DOWN) to arm the drone.</li><li>Set the SB switch down (SB: DOWN) for FlowHold Mode.</li></ol><p><strong>Key Points</strong>:</p><ul><li>Similar to AltHold, in FlowHold mode, you provide velocity instead of angles. At 0% throttle, the drone decelerates based on parameter settings.</li><li>At 50% throttle, it maintains its position.</li><li>At 100% throttle, it climbs according to the parameter list.</li><li>Gradually increase the throttle and wait a few seconds for the drone to respond.</li><li>The RangeFinder works effectively up to 120 cm; beyond that, the barometer takes over.</li><li>To lock the drone&#39;s position on the roll and pitch axes, it uses an optical flow sensor. This may take several seconds and requires a good ground texture for effective locking.</li></ul>',47)]))}const b=i(n,[["render",s]]);export{_ as __pageData,b as default};
