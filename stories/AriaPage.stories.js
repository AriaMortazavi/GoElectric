import React from 'react';
import VehicleType from '../pages/VehicleType/index'
import KilometerCounter from '../pages/KilometerCounter/index'

export default {
    title:"Aria's pages",
    component: VehicleType
};

export const PickVehicle = () => <VehicleType/>
export const KilometerPicker = () => <KilometerCounter/>

