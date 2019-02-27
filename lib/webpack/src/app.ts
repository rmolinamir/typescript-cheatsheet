// Enum background types.
enum Backgrounds {
  Orange = 'orange',
  LightYellow = 'lightyellow'
}

// Elements object interface.
interface ElementsObj {
  [id: string]: HTMLElement | null;
};

// Elements class instance.
class Elements {
  private static instance: Elements;

  /**
   * Read only property that can not be modified. The constructor can't be called since it's private.
   */
  private constructor() {}

  /**
   * If get instance has not been initialized then it will construct a new OnlyOne class object,
   * then store it into the instance property. If it has already been created then it will simply
   * return the instance property.
   * This assures that there will only ever be one instance.
   */
  static getInstance() {
    if (!Elements.instance) {
      Elements.instance = new Elements();
    }
    return Elements.instance;
  }

  private elements: ElementsObj = {};

  setElementById = (value: string): HTMLElement | null => {
    const ele = document.getElementById(value);
    this.elements = {
      ...this.elements,
      [value]: ele
    };
    return ele;
  }

  getElementsById = (): ElementsObj => {
    return this.elements;
  }
}

const elements = Elements.getInstance();

const appEl = elements.setElementById('App');
const Button = elements.setElementById('Button');
const OnlyButton = elements.setElementById('OnlyButton');

if (appEl) {
  appEl.style.backgroundColor = Backgrounds.Orange
}

class ClickHandler {
  private bodyEle: HTMLElement | null = appEl;

  private currentBackground: Backgrounds = Backgrounds.Orange

  onClickHandler = () => {
    switch (this.currentBackground) {
      case Backgrounds.Orange:
        this.currentBackground = Backgrounds.LightYellow;
        break;
      case Backgrounds.LightYellow: 
        this.currentBackground = Backgrounds.Orange;
        break;
    }
    if (this.bodyEle) {
      this.bodyEle.style.backgroundColor = this.currentBackground;
    }
  }
}

// Private Constructors & Singletons (added with TypeScript 2.0)
class OnlyOneClickHandler {
  private static instance: OnlyOneClickHandler;

  private bodyEle: HTMLElement | null = appEl;

  private currentBackground: Backgrounds = Backgrounds.Orange

  /**
   * Read only property that can not be modified. The constructor can't be called since it's private.
   */
  private constructor(public readonly name: string) {}

  /**
   * If get instance has not been initialized then it will construct a new OnlyOne class object,
   * then store it into the instance property. If it has already been created then it will simply
   * return the instance property.
   * This assures that there will only ever be one instance.
   */
  static getInstance() {
    if (!OnlyOneClickHandler.instance) {
      OnlyOneClickHandler.instance = new OnlyOneClickHandler('The Only One');
    }
    return OnlyOneClickHandler.instance;
  }

  onClickHandler = () => {
    switch (this.currentBackground) {
      case Backgrounds.Orange:
        this.currentBackground = Backgrounds.LightYellow;
        break;
      case Backgrounds.LightYellow: 
        this.currentBackground = Backgrounds.Orange;
        break;
    }
    if (this.bodyEle) {
      this.bodyEle.style.backgroundColor = this.currentBackground;
    }
  }
}

const anotherClickHandler = OnlyOneClickHandler.getInstance();

const clickHandler = new ClickHandler();

if (Button) {
  Button.onclick = clickHandler.onClickHandler
}

if (OnlyButton) {
  OnlyButton.onclick = anotherClickHandler.onClickHandler
}

const activeElements = elements.getElementsById();

console.log(activeElements);
