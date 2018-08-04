import React from 'react';
import HardwareFields from './HardwareFields';
import SoftwareFields from './SoftwareFields';
import SubscriptionFields from './SubscriptionFields';

const FieldLoader = ({ context }) => {
  if (context.typeName === 'hardware') { return HardwareFields; }
  if (context.typeName === 'saas') { return SubscriptionFields; }
  if (context.typeName === 'saap') { return SoftwareFields; }
  return (
    <h4>
Could not load fields
    </h4>
  );
};

export default FieldLoader;
