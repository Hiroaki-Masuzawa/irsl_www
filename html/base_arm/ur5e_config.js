// ur5e_config.js
import baseConfig from './sample_robot_config.js';

const ur5eConfig = {
  ...baseConfig,  // baseConfigをコピーして
  jointTopicName: "/trajectory_controller/command", // 上書き
  jointNames: ['elbow_joint', 'shoulder_lift_joint', 'shoulder_pan_joint', 'wrist_1_joint', 'wrist_2_joint', 'wrist_3_joint'],
  trajectoryDurationSecs: 1,
  initialLinearSpeed: 0.,
  initialAngularSpeed: 0.
};

export default ur5eConfig;

