# Barcode Compare
Simple way to compare two barcodes for a match.

As detailed in my [blog post](https://mmmcmullin.wordpress.com/2015/09/26/my-new-keyboard-is-a-barcode-reader/), barcode reading can be a complex affair, if most of the coding samples in search results are to be believed. However, it doesn't have to be, because mose USB handheld barcode readers can act like a second keyboard. If you can read keyboard input, you can probably read barcodes just as easily.

There are two caveats. First, users expect to start scanning straight away, so make sure that the appropriate text box has the focus by default. Second, most barcode readers add an Enter/Return value after the barcode, which you might need to allow for.

This project demonstrates both those ideas to create a simple barcode comparison app. The idea came from a real need in our company, where each order had several parts, but they all had the same barcode. When our kitting department needed to sort through which orders needed to go together, they could simply scan both codes to quickly check that they matched.

The main idea here is to show how jQuery can be used to set the focus of an input box (so users can start scanning barcodes immediately), and to capture 'Enter/Return' keypresses.

You don't need a barcode reader to test this. Keyboard input works fine, but it does expect you to press enter after each value.
