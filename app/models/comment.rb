class Comment < ApplicationRecord

    include likeable

    validates :body, presence: true

    after_initialize :ensure_video_id!

    belongs_to :video, inverse_of: :comments

    belongs_to :commenter
        foreign_key: :user_id,
        class_name: :User,
        inverse_of: :comments

    has_many :child_comments,
        foreign_key: :parent_comment_id,
        class_name: :Comment

    belongs_to :parent_comment,
        foreign_key: :parent_comment_id,
        class_name: :Comment,
        optional: true

    has_many :likes, as: :likeable

    has_many :dislikes, as: :dislikeable

    def ensure_video_id!
        self.video_id ||= self.parent_comment.video_id if parent_comment
    end


end
