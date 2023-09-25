const fs = require('fs');
const path = require('path');

module.exports.acceptFriendContact = fs.readFileSync(path.join(__dirname, 'acceptFriendContact.gql'), 'utf8');
module.exports.buyAvatar = fs.readFileSync(path.join(__dirname, 'buyAvatar.gql'), 'utf8');
module.exports.buyPoint = fs.readFileSync(path.join(__dirname, 'buyPoint.gql'), 'utf8');
module.exports.createOrUpdateRating = fs.readFileSync(path.join(__dirname, 'createOrUpdateRating.gql'), 'utf8');
module.exports.deleteNotif = fs.readFileSync(path.join(__dirname, 'deleteNotif.gql'), 'utf8');
module.exports.deleteSpot = fs.readFileSync(path.join(__dirname, 'deleteSpot.gql'), 'utf8');
module.exports.deleteTag = fs.readFileSync(path.join(__dirname, 'deleteTag.gql'), 'utf8');
module.exports.friendRequest = fs.readFileSync(path.join(__dirname, 'friendRequest.gql'), 'utf8');
module.exports.getNewTokens = fs.readFileSync(path.join(__dirname, 'getNewTokens.gql'), 'utf8');
module.exports.insertChat = fs.readFileSync(path.join(__dirname, 'insertChat.gql'), 'utf8');
module.exports.insertSpot = fs.readFileSync(path.join(__dirname, 'insertSpot.gql'), 'utf8');
module.exports.insertTag = fs.readFileSync(path.join(__dirname, 'insertTag.gql'), 'utf8');
module.exports.logout = fs.readFileSync(path.join(__dirname, 'logout.gql'), 'utf8');
module.exports.markChatMessageAsRead = fs.readFileSync(path.join(__dirname, 'markChatMessageAsRead.gql'), 'utf8');
module.exports.sendChatMessage = fs.readFileSync(path.join(__dirname, 'sendChatMessage.gql'), 'utf8');
module.exports.sendNotif = fs.readFileSync(path.join(__dirname, 'sendNotif.gql'), 'utf8');
module.exports.signIn = fs.readFileSync(path.join(__dirname, 'signIn.gql'), 'utf8');
module.exports.signUp = fs.readFileSync(path.join(__dirname, 'signUp.gql'), 'utf8');
module.exports.toggleFavorite = fs.readFileSync(path.join(__dirname, 'toggleFavorite.gql'), 'utf8');
module.exports.updateContact = fs.readFileSync(path.join(__dirname, 'updateContact.gql'), 'utf8');
module.exports.updateNotifStatus = fs.readFileSync(path.join(__dirname, 'updateNotifStatus.gql'), 'utf8');
module.exports.updateProfile = fs.readFileSync(path.join(__dirname, 'updateProfile.gql'), 'utf8');
module.exports.updateSpot = fs.readFileSync(path.join(__dirname, 'updateSpot.gql'), 'utf8');
module.exports.updateTag = fs.readFileSync(path.join(__dirname, 'updateTag.gql'), 'utf8');
module.exports.upload = fs.readFileSync(path.join(__dirname, 'upload.gql'), 'utf8');