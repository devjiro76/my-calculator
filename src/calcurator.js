import Processor from "./Processor";

class Calcurator {
  constructor(par) {
    this.calc = new Processor();
    this.init(par);
  }

  async init(par) {
    this.base = par.el;
    this.wrapper = null;
    this.display = null;
    this.help = null;
    this.result = null;

    try {
      await this._draw(par.template, par.style);
      this._cache();
      this._event();
    } catch (e) {
      console.error("init error: ", e);
      return null;
    }
  }
  async _draw(template, style) {
    let htmlContent, cssContent;

    try {
      const html = await fetch(`./src/template/${template}/index.html`);
      htmlContent = await html.text();
    } catch (e) {
      htmlContent = "";
    }

    try {
      const css = await fetch(`./src/template/${template}/index.css`);
      cssContent = await css.text();
    } catch (e) {
      cssContent = "";
    }

    const wrapper = document.createElement("div");
    wrapper.innerHTML = htmlContent;
    wrapper.querySelector(".calcurator").classList.add(template);
    this.base.appendChild(wrapper);
    this.wrapper = wrapper;

    if (style && style.width) {
      this.wrapper.style.cssText += `width: ${style.width}px`;
    }

    const styles = document.createElement("style");
    styles.id = `calc_${template}_style`;
    styles.innerHTML = cssContent;
    this.base.append(styles);
  }

  _cache() {
    this.result = this.wrapper.querySelector(".result");
    this.help = this.wrapper.querySelector(".help");
  }

  _event() {
    const functionButtons = this.wrapper.querySelectorAll(".functions button");
    Array.from(functionButtons).forEach(item => {
      item.addEventListener("click", e => {
        const command = item.dataset.cmd;

        if (command === "reset") {
          this.calc.reset();
          this.help.innerText = "";
          this.result.innerText = "0";
        }
      });
    });

    const numberButtons = this.wrapper.querySelectorAll(".numbers button");
    Array.from(numberButtons).forEach(item => {
      item.addEventListener("click", e => {
        try {
          const { type, value } = item.dataset;

          if (type === "func") {
            if (value === "calc") {
              this.help.innerText = this.result.innerText;

              const result = this.calc.input({ type, value });
              this.result.innerText = this.prettyFloat(result);
            } else {
              const lastIdx = this.result.innerText.length - 1;
              const lastWord = this.result.innerText[lastIdx];

              if (["+", "-", "*", "/"].includes(lastWord)) {
                const before = this.result.innerText.substr(0, lastIdx);
                this.result.innerText = before + item.innerText;
              } else {
                this.result.innerText =
                  this.result.innerText === "0"
                    ? item.innerText
                    : this.result.innerText + item.innerText;
              }

              this.calc.input({ type, value });
            }
          } else {
            this.result.innerText =
              this.result.innerText === "0"
                ? item.innerText
                : this.result.innerText + item.innerText;
            this.calc.input({ type, value });
          }
        } catch (e) {
          let message;

          if (e.message === "NOTNUMBER") {
            message = "Please Input functions(+,-,*,/)";
          }

          if (e.message === "BIG") {
            message = "Calcurator can handle under 9999999999";
            this.result.innerText = this.prettyFloat(9999999999);
          }

          alert(message);
        }
      });
    });
  }

  prettyFloat(number) {
    const parsedNumber = number.toFixed(5).split(".");

    let digit = "";
    let decimal = "";

    digit = parseInt(parsedNumber[0]).toLocaleString();

    if (parseInt(parsedNumber[1])) {
      const small = parsedNumber[1].toString();
      const cleanSmall = small.replace(/0+$/, "");
      decimal = cleanSmall ? `.${cleanSmall}` : "";
    }

    return `${digit}${decimal}`;
  }
}

export default Calcurator;
