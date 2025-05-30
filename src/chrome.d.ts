declare namespace chrome {
  namespace devtools {
    namespace panels {
      interface Panel {
        onShown: {
          addListener(callback: (window: Window) => void): void;
        };
        onHidden: {
          addListener(callback: () => void): void;
        };
      }

      function create(
        title: string,
        iconPath: string,
        pagePath: string,
        callback?: (panel: Panel) => void
      ): void;
    }
  }
} 