class SpeachController < ApplicationController
  def show
    @key = ENV['GOOGLE_TRANSLATE_KEY']
  end
end
