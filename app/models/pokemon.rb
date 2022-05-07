class Pokemon < ApplicationRecord
  belongs_to :user
  has_many :bookings, dependent: :destroy
  validates :name, :description, :price, presence: true
end
