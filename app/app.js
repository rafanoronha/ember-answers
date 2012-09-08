Answers = Ember.Application.create();

Answers.Question = Ember.Object.extend({
  title: null
});

Answers.questionsController = Ember.ArrayController.create({
  content: [],

  init: function() {
    var q = Answers.Question.create({ title: "Does Ember deserve a shot" });
    this.pushObject(q);
  }

});
