import React from 'react';
import HardwareFields from '../Forms/HardwareFields';
import SoftwareFields from '../Forms/SoftwareFields';
import SubscriptionFields from '../Forms/SubscriptionFields';

const FieldLoader = ({context}) => {
	if(context.typeName === 'hardware') { return HardwareFields }
	if(context.typeName === 'saas') { return SubscriptionFields }
	if(context.typeName === 'saap') { return SoftwareFields }
	return ( <h4>Could not load fields</h4> )
}

export default FieldLoader;