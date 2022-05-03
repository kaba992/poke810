class Booking < ApplicationRecord
  STATUS = ['pending', 'approved', 'rejected'].freeze
  belongs_to :pokemon
  belongs_to :user
  validates :start_date, :end_date, presence: true
  validates :status, inclusion: { in: STATUS }
end
