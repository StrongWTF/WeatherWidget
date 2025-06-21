// ------------------------------------------------CHANGE THESE SETTINGS ----------------------------------------------- */
	// REQUIRED
	var yourApiKey = "889542bef1b599418e7b408f3e6376b6";		// your OpenWeatherMap Api key here
	var yourCity = "Miami";										// your city name, ex: "London, UK" or "Las Vegas, NV, US" 
	var yourUnits = "metric";									// 'imperial' for fahrenheit  'metric' for celsius  'standard' for kelvin.

	// OPTIONAL
	var weatherDisplay = "full";				// options: "full" , "weather", "simple" , "temp" , "time" (if blank or error, default is "full")
	var weatherIcons = 1;						// show Weather status icons in display 1=on  0=off
	var iconHeight = "60px";					// weather icon height (for best results use textSize + 2. ex: textSize = 20pt + 2 = 22px)
	var textSize = "50pt";						// font size
	var textColor = "white";					// font color
	var weatherBackground = "lightgrey";		// weather Background color  (if dynamicBackground is enabled this only applies during daytime hours)
	var dynamicBackground = 0;					// weather background changes based on day or night 1=on 0=off
	var clockSeperator = "";					// optional: seperator for the temp and time in full mode only (ex: -, /, ., *, @, additional spaces, etc.)
	var time24hour = true;						// 24 hour time.  true or false
	var weatherBorder = "0";					// border size in pixels. default is 0
	var autoCheckUpdates = true;				// Automatically check for updates.

// ---------------------------------------------  NO CHANGES BELOW HERE  ----------------------------------------------- */