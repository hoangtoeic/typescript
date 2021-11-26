/// <reference types="@types/google.maps" />
// import { User } from './User';
// import { Company } from './Company';
import { setDefaultResultOrder } from 'dns';
import { CustomMap } from './CustomMap';
import { User } from './User';
import { Company } from './Company';
//new CustomMap('map');
const user = new User();
const customMap = new CustomMap('map')
const company = new Company()
customMap.addMarker(user);
customMap.addMarker(company);