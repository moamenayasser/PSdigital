"use client";

import { forwardRef, useEffect } from "react";
import {
  AnimatePresence,
  m,
  useAnimation,
  domAnimation,
  LazyMotion,
} from "framer-motion";
import { useFloating, useInteractions, useDismiss } from "@floating-ui/react";
import merge from "deepmerge";
import cn from "@/utils/cn";
const objectsToArray = (object) => {
  let result = [];

  Object.values(object).forEach((value) => {
    if (typeof value === "string") {
      result = [...result, value];
    } else if (
      typeof value === "object" &&
      !Array.isArray(value) &&
      value !== null
    ) {
      result = [...result, ...objectsToArray(value)];
    }

    return undefined;
  });

  return result;
};
const objectsToString = (object) => {
  return objectsToArray(object).join(" ");
};
const drawer = {
  defaultProps: {
    size: 300,
    overlay: true,
    placement: "left",
    overlayProps: undefined,
    className: "",
    dismiss: undefined,
    onClose: undefined,
    transition: {
      type: "tween",
      duration: 0.3,
    },
  },
  styles: {
    base: {
      drawer: {
        position: "fixed",
        zIndex: "z-[99]",
        pointerEvents: "pointer-events-auto",
        backgroundColor: "bg-white",
        boxSizing: "box-border",
        width: "w-full",
        boxShadow: "shadow-2xl shadow-blue-gray-900/10",
      },
      overlay: {
        position: "absolute",
        inset: "inset-0",
        width: "w-full",
        height: "h-full",
        pointerEvents: "pointer-events-auto",
        zIndex: "z-[95]",
        backgroundColor: "bg-black",
        backgroundOpacity: "bg-opacity-60",
        backdropBlur: "backdrop-blur-sm",
      },
    },
  },
};

const Drawer = forwardRef((props, ref) => {
  let {
    open,
    size,
    overlay,
    children,
    placement,
    overlayProps,
    className,
    onClose,
    dismiss,
    transition,
    overlayRef,
    ...rest
  } = props;

  // 1. init
  const {
    defaultProps,
    styles: { base },
  } = drawer;
  const constrols = useAnimation();

  // 2. set default props
  size = size ?? defaultProps.size;
  overlay = overlay ?? defaultProps.overlay;
  placement = placement ?? defaultProps.placement;
  className = className ?? defaultProps.className;
  overlayProps = overlayProps ?? defaultProps.overlayProps;
  onClose = onClose ?? defaultProps.onClose;
  dismiss = merge(defaultProps.dismiss, dismiss || {}) ?? defaultProps.dismiss;
  transition = transition ?? defaultProps.transition;

  // 3. set styles
  const drawerClasses = cn(
    objectsToString(base.drawer),
    {
      "top-0 right-0": placement === "right",
      "bottom-0 left-0": placement === "bottom",
      "top-0 left-0": placement === "top" || placement === "left",
    },
    className
  );
  const overlayClasses = cn(
    objectsToString(base.overlay),
    overlayProps?.className
  );

  // 4. set the drawer
  const { context } = useFloating({
    open,
    onOpenChange: onClose,
  });

  const { getFloatingProps } = useInteractions([useDismiss(context, dismiss)]);

  useEffect(() => {
    constrols.start(open ? "open" : "close");
  }, [open, constrols, placement]);

  const drawerAnimation = {
    open: {
      x: 0,
      y: 0,
    },
    close: {
      x: placement === "left" ? -size : placement === "right" ? size : 0,
      y: placement === "top" ? -size : placement === "bottom" ? size : 0,
    },
  };

  const backdropAnimation = {
    unmount: {
      opacity: 0,
      transition: {
        delay: 0.3,
      },
    },
    mount: {
      opacity: 1,
    },
  };

  // 5. return
  return (
    <>
      <LazyMotion features={domAnimation}>
        <AnimatePresence>
          {overlay && open && (
            <m.div
              ref={overlayRef}
              className={overlayClasses}
              initial="unmount"
              exit="unmount"
              animate={open ? "mount" : "unmount"}
              variants={backdropAnimation}
              transition={{ duration: 0.3 }}
            />
          )}
        </AnimatePresence>
        <m.div
          {...getFloatingProps({
            ref,
            ...rest,
          })}
          className={drawerClasses}
          style={{
            maxWidth:
              placement === "left" || placement === "right" ? size : "100%",
            maxHeight:
              placement === "top" || placement === "bottom" ? size : "100%",
            height:
              placement === "left" || placement === "right" ? "100vh" : "100%",
          }}
          initial="close"
          animate={constrols}
          variants={drawerAnimation}
          transition={transition}
        >
          {children}
        </m.div>
      </LazyMotion>
    </>
  );
});

export default Drawer;
