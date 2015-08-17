Articles = new Mongo.Collection('article');

if (Meteor.isClient) {
  // Meteor.subscribe('Articles');
}

if (Meteor.isServer) {
  DrupalDdp.registerType('article', Articles);
  Meteor.publish('article', function() {
    return Articles.find();
  });
}
