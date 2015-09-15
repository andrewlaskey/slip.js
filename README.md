slip.js
=======

Full-width, responsive content slider.

##Setup

Include the scripts:

```HTML
<script src="js/jquery.js"></script>
<script src="js/slip.js"></script>
```

Structure your elements like this:

```HTML
<ul data-slip-nav="mySlip">
	<li><button data-slip-to="0">Slide 1</button></li>
	<li><button data-slip-to="1">Slide 2</button></li>
	<li><button  data-slip-to="2">Slide 3</button></li>
</ul>

<div data-slip-id="mySlip">
	<ul>
		<li>
			<!-- Slide Content -->
		</li>
		<li>
			<!-- Slide Content -->
		</li>
		<li>
			<!-- Slide Content -->
		</li>
	</ul>
</div>
```

Initialize the plugin:

```JavaScript
$('#mySlip').slip();
```

That's all there is to it.

### To Do

* Update plugin to not use jQuery
