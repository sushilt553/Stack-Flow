# Stack Flow

### Overview

Q&A platform for professional developers, inspired by Stack Overflow

[Live Site](https://stack-flow.herokuapp.com/)

![](https://github.com/sushilt553/Stack-Flow/blob/master/app/assets/images/stack-flow-homepage.png)

### Features

* Post Questions and Answers
  * Users can ask or answer coding questions in a community of users.
* Votes
  * Users can upvote helpful questions/answers posted by other users.
  * Users can downvote questions/answers that need additional improvement.
* Search questions by tags
  * Users can search questions by tag name.
* Tags 
  * Users can see list of all tags and select to view filtered questions/answers.

### Technologies

* Stack Flow was built using React, Redux, and Ruby on Rails on top of a Postgresql database.

### Code highlights

Users can search questions based on multiple tag names. This feature is implemented by using active record query on the backend that allows to search for questions based on tag names selected. Below is the code that is used to search questions.
```ruby
class Api::SearchController < ApplicationController

    def search
        tags_arr = params[:tags].split(" ")
        @questions = []

        tags_arr.each do |tag|
            main_tag = Tag.find_by(name: tag)
            if main_tag
                main_tag.questions.each do |question|
                    @questions.push(question)
                end
            end
        end

        render :search
    end
end
```

Users can vote on questions and answers. This feature is implemented by using polymorphic association. If the status value (boolean) is different from the stored status value (boolean) in the database, the code below updates a voter's existing vote. If a voter is a new user, the code creates a new vote.

```ruby
class Api::VotesController < ApplicationController

    def create
        @vote = Vote.find_by(voter_id: current_user.id, votable_type: params[:vote][:votable_type], votable_id: params[:vote][:votable_id])

        if @vote
            @vote.update_attributes(vote_params)
            render :show
        else
            @vote = Vote.new(vote_params)
            @vote.voter_id = current_user.id
            if @vote.save
                render :show
            else
                render json: @vote.errors.full_messages, status: 422
            end
        end
    end

    private
    def vote_params
        params.require(:vote).permit(:votable_type, :votable_id, :status)
    end
end
```

The code below prevents from creating/storing multiple tags of same name.
```ruby
def self.create_tags(tags_arr, question)
    tags_arr.each do |tag|
        new_tag = Tag.find_by(name: tag) || Tag.create!(name: tag)
        Tagging.create(question_id: question.id, tag_id: new_tag.id)
    end
end
```
