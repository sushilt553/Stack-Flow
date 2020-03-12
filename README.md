# Stack Flow

### Overview

Q&A platform for professional developers, inspired by Stack Overflow

[Live Site](https://stack-flow.herokuapp.com/)

![](https://github.com/sushilt553/Stack-Flow/blob/master/app/assets/images/stack-flow-homepage.png)

### Features

* Questions and Answers - Users can ask or answer coding questions in a community of users.
* Votes - Users can upvote helpful questions/answers written by other users. Also, users can downvote questions/answers that need more improvement.
* Search questions by tags - Users can search questions by tag name.
* Tags - Users can see list of all tags and click on to view related questions/answers.

### Technologies

* Stack Flow was built using React, Redux, and Ruby on Rails on top of a Postgresql database.

### Code highlights


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

```ruby
def self.create_tags(tags_arr, question)
    tags_arr.each do |tag|
        new_tag = Tag.find_by(name: tag) || Tag.create!(name: tag)
        Tagging.create(question_id: question.id, tag_id: new_tag.id)
    end
end
```
