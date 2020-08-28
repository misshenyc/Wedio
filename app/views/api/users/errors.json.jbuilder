json.extract! @user.errors.messages, *(@user.errors.messages.keys.select do |k|
   !@user.errors.messages[k].empty?
end)