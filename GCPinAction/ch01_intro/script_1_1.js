
const prj_id = 'your-project-id'
const prj_zone = 'your-zone'

const gce = require('@google-cloud/compute')({
  projectId: prj_id
});

const zone = gce.zone(prj_zone);

console.log('Getting your VMs...');

zone.getVMs().then((data) => {
  data[0].forEach((vm) => {
    console.log('Found a VM called', vm.name);
  });
  console.log('Done.');
});