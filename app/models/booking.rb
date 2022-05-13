class Booking < ApplicationRecord
  STATUS = ['pending', 'validated', 'rejected'].freeze
  belongs_to :pokemon
  belongs_to :user
  validates :start_date, :end_date, presence: true
  validates :status, inclusion: { in: STATUS }
  scope :pending_and_validated, -> { where(" status = 'pending' OR status = 'validated' ") }
end
