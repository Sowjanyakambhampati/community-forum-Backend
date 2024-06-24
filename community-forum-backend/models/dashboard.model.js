const mongoose = require('mongoose');

// // Initialize Dashboard model
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const dashboardSchema = new Schema({
//     user: { type: String, required: true },
//     admin: { type: String, required: true }
// });

// const Dashboard = mongoose.model('Dashboard', dashboardSchema);
// class Dashboard {
//     constructor(user, admin) {
//         this.user = user;
//         this.admin = admin;
//     }
// }

// module.exports = Dashboard;
// Initialize Dashboard model
const Schema = mongoose.Schema;
const dashboardSchema = new Schema({
    user: { type: String, required: true },
    admin: { type: String, required: true }
});
const Dashboard = mongoose.model('Dashboard', dashboardSchema);

module.exports = Dashboard;