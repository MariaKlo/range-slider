<h1>Range slider Jquery plugin</h1>
<p>This is range-slider written in TypeScript as a JQuery plugin. It has MVP architecture.</p>
<br>
<br>
<h3>How to use</h3>
<br>
<br>
<p><b>Clone repository: git clone https://github.com/MariaKlo/range-slider.git</b></p>
<br>
<br>
<p><b>Go to project repository: cd slider-plugin</b></p>
<br>
<br>
<p><b>Install dependencies: npm i</b></p>
<br>
<br>
<p><b>To start development mode: npm run dev</b></p>
<br>
<br>
<p><b>To build project: npm run build</b></p>
<br>
<br>
<p><b>To run server: npm run start</b></p>
<br>
<br>
<p><b>To run tests: npm run test</b></p>
<br>
<br>
<br>
<h3>Parameters</h3>
<br>
<br>
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
			<td>50</td>
			<td>Number</td>
			<td>Initial value for single thumb value or for first (left) thumb</td>
		</tr>
		<tr>
			<td>valueSecond</td>
			<td>70</td>
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
			<td>ticksValues</td>
			<td>[]</td>
			<td>Array of numbers</td>
			<td>Sets numbers for scale</td>
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
<br>
<br>
<h3>Architecture description</h3>
<br>
<br>
<p>Plugin has MVP-architecture.</p>
<br>
<br>
<p><b>Model</b></p>
<br>
<br>
<p>Model stores data and contains business-logic</p>
<br>
<br>
<p><b>View</b></p>
<br>
<br>
<p>View has calculations which are necessary of display, also reacts on user's actions. View consists of subview. Only main View reaches subview but subviews don't reach main View and each other.</p>
<br>
<br>
<p><b>Subview</b></p>
<br>
<ul>
  <li>barView: creates progress bar for slider</li>
  <br>
  <li>formView: creates HTML elements for slider</li>
  <br>
  <li>stepView: sets step for slider</li>
  <br>
  <li>thumbView: creates thumbs and bubble elements (bubble is an element above thumb)</li>
  <br>
  <li>ticksView: creates scale</li>
  <br>
</ul>
<br>
<br>
<p><b>Presenter</b></p>
<br>
<br>
<p>Presenter is subscribed on Model and View, reacts on changes and updates them. Gives data from View to Model and vice versa.</p>
<br>
<br>
<br>
<h3>UML-diagram</h3>
