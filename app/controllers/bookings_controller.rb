class BookingsController < ApplicationController
  def create
    @pokemon = Pokemon.find(params[:pokemon_id])
    @booking = Booking.new(booking_params_booker)
    @booking.user_id = current_user.id
    @booking.pokemon_id = @pokemon.id
    if @booking.save!
      redirect_to dashboard_path
    else
      render
    end
  end

  def update
    @booking = Booking.find(params[:id])
    @booking.update(booking_params_owner)
  end

  private

  def booking_params_booker
    params.require(:booking).permit(:start_date, :end_date)
  end

  def booking_params_owner
    params.require(:booking).permit(:status)
  end
end
