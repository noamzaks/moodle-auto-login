# Just add the email in the script
echo "Please enter your email address"
read email

sed -i "s/'';/'$email';/" ./ms_login.js
