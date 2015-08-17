if (Meteor.isClient) {
  Template.articleList.onCreated(function(){
    // Template level subscription.
    this.subscribe('article');
  });

  Template.articleList.helpers({
    articles: function() {
      var articles = Articles.find();
      return articles;
    },
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
