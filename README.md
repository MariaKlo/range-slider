<h1>Range slider Jquery plugin</h1>
<p>This is range-slider written in TypeScript as a JQuery plugin. It has MVP architecture.</p>
<p>To see demo page and use range-slider, click here: https://mariaklo.github.io/range-slider/</p>
<h3>How to use</h3>
<p>Clone repository:<b> git clone https://github.com/MariaKlo/range-slider.git</b></p>
<p>Go to project repository:<b> cd slider-plugin</b></p>
<p>Install dependencies:<b> npm i</b></p>
<p>To start development mode:<b> npm run dev</b></p>
<p>To build project:<b> npm run build</b></p>
<p>To run server:<b> npm run start</b></p>
<p>To run tests:<b> npm run test</b></p>
<br>
<h3>Or add slider to your page:</h3>
<p>Include imports to your js files:</p>
<p>import '/path/to/docs/slider.js'</p>
<p>import '/path/to/docs/slider.css'</p>
<p>And add api to any HTML-teg nad any class/id you want with the following default options:</p>
<p>$('your_class/id').sliderPlugin({</p>
<p>max: 100,</p>
<p>min: 0,</p>
<p>step: 1,</p>
<p>defaultValue: 10,</p>
<p>valueSecond: 50,</p>
<p>isMultithumb: false,</p>
<p>showBubble: false,</p>
<p>isVertical: false,</p>
<p>showTicks: false,</p>
<p>barColor: 'linear-gradient(180deg, #cf6f7f 0%, #ea6666 100%)',</p>
<p>thumbColor: 'linear-gradient(180deg, #cf6f7f 0%, #ea6666 100%)',</p>
<p>bubbleColor: '#eac966'</p>
<p>});</p>
<h3>Parameters</h3>
<table>
	<tbody>
		<tr>
			<td>Option</td>
			<td>Default Value</td>
			<td>Type</td>
			<td>Description</td>
		</tr>
		<tr>
			<td>Max</td>
			<td>100</td>
			<td>Number</td>
			<td>Maximum value for slider</td>
		</tr>
		<tr>
			<td>Min</td>
			<td>0</td>
			<td>Number</td>
			<td>Minimum value for slider</td>
		</tr>
		<tr>
			<td>Step</td>
			<td>1</td>
			<td>Number</td>
			<td>Step of slider</td>
		</tr>
		<tr>
			<td>defaultValue</td>
			<td>10</td>
			<td>Number</td>
			<td>Initial value for single thumb value or for first (left) thumb</td>
		</tr>
		<tr>
			<td>valueSecond</td>
			<td>50</td>
			<td>Number</td>
			<td>Initial value for second (right) thumb</td>
		</tr>
		<tr>
			<td>isMultiThumb</td>
			<td>false</td>
			<td>Boolean</td>
			<td>False - one thumb, true - two thumbs</td>
		</tr>
		<tr>
			<td>showBubble</td>
			<td>false</td>
			<td>Boolean</td>
			<td>False - no bubble over thumb, true - shows bubble over thumb</td>
		</tr>
		<tr>
			<td>isVertical</td>
			<td>false</td>
			<td>Boolean</td>
			<td>false - slider is horizontal, true - slider is vertical</td>
		</tr>
		<tr>
			<td>showTicks</td>
			<td>false</td>
			<td>Boolean</td>
			<td>false - no scale showed, true - shows scale above slider or on the right side for vertical slider</td>
		</tr>
		<tr>
			<td>barColor</td>
			<td>'linear-gradient(180deg, #cf6f7f 0%, #ea6666 100%)'</td>
			<td>String</td>
			<td>Changes color of progress bar. Changes "background" style. Possible values: word (red, green,etc), hex, rgb, rgba, hsl, hsla, linear-gradient</td>
		</tr>
		<tr>
			<td>thumbColor</td>
			<td>'linear-gradient(180deg, #cf6f7f 0%, #ea6666 100%)'</td>
			<td>String</td>
			<td>Changes color of thumbs. Changes "background" style. Possible values: word (red, green,etc), hex, rgb, rgba, hsl, hsla, linear-gradient</td>
		</tr>
		<tr>
			<td>bubbleColor</td>
			<td>'#eac966'</td>
			<td>String</td>
			<td>Changes color of bubbles. Changes "background-color" style. Possible values: word (red, green,etc), hex, rgb, rgba, hsl, hsla</td>
		</tr>
	</tbody>
</table>
<br>
<h3>Architecture description</h3>
<br>
<p>Plugin has MVP-architecture.</p>
<br>
<p><b>Model</b></p>
<br>
<p>Model stores data and contains business-logic</p>
<br>
<p><b>View</b></p>
<br>
<p>View has calculations which are necessary of display, also reacts on user's actions. View consists of subview. Only main View reaches subview but subviews don't reach main View and each other.</p>
<br>
<p><b>Subview</b></p>
<br>
<ul>
  <li>barView: creates progress bar for slider</li>
  <li>formView: creates HTML elements for slider</li>
  <li>thumbView: creates thumbs and bubble elements (bubble is an element above thumb)</li>
  <li>ticksView: creates scale</li>
</ul>
<br>
<p><b>Presenter</b></p>
<br>
<p>Presenter is subscribed on Model and View, reacts on changes and updates them. Gives data from View to Model and vice versa.</p>
<br>
<p><b>Observer</b></p>
<br>
<p>Observer handles updates made in both View and Model. Observer notifies Model when View is updated and vice versa: Observer notifies View when Model is updated.</p>
<br>
<h3>UML-diagram</h3>
<img src="https://github.com/MariaKlo/range-slider/blob/master/uml/uml.png" alt="uml">
