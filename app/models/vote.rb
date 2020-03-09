class Vote < ApplicationRecord

    validates_uniqueness_of :voter_id, scope: [:votable_type, :votable_id]

    belongs_to :votable, polymorphic: true
end
