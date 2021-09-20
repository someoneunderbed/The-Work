import { Presed, Presed2 } from "./export/header.js";
import { FrameOne } from "./frames/frame.js";
import { Frame4, Frame4two, Frame4three } from "./frames/frame-4.js";
import { FrameFirst, FrameFirst2, FrameFirst22 } from "./frames/framefirst.js";

FrameOne();

//Frames/framesfirst.js//
const framefirst = new FrameFirst();
framefirst.framefirst();
const framefirst2 = new FrameFirst2();
framefirst2.framefirst();
const framefirst22 = new FrameFirst22();
framefirst22.framefirst();

// Export/Header.js //
const presed = new Presed(".click", ".list");
presed.ListMenu();
const presed2 = new Presed2(".click2", ".list2");
presed2.ListMenu();

// Frames/frame-4.js//
const frame4 = new Frame4(".side-11", ".frame-4");
frame4.frameFunc4();
const frame4two = new Frame4two(".side-22", ".frame-4-2");
frame4two.frameFunc4();
const frame4three = new Frame4three(".side-33", ".frame-33");
frame4three.frameFunc4();

//********************************************* */
