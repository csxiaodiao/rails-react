# frozen_string_literal: true

class WelcomeController < ApplicationController
  def index
    @events = Event.order('start_datetime ASC')
  end
end
