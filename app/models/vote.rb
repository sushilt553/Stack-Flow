class Vote < ApplicationRecord

    validates :voter_id, uniqueness: {scope: [:votable_type, :votable_id, :status]}
    validates :status, inclusion: {in: [true, false]}
    validates :votable_type, :votable_id, presence: true

    belongs_to :votable, polymorphic: true
end
