#ifdef GL_ES

precision mediump float;

#endif

#define PI 3.1415926535897932384626433832795

uniform vec2 u_resolution;
uniform sampler2D u_texture;
uniform float u_time;
uniform bool u_gay;

// Hash without Sine
// MIT License...
// Copyright (c)2014 David Hoskins.
// https://www.shadertoy.com/view/4djSRW

float hash12(vec2 p){
	vec3 p3  = fract(vec3(p.xyx) * .1031);
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.x + p3.y) * p3.z);
}


void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    st.y = 1.0 - st.y;

    st.x += sin((st.y + u_time) * PI) * abs(sin(st.x * PI)) * 0.05;
    st.y += sin((st.x + u_time) * PI) * abs(sin(st.y * PI)) * 0.05;

    vec4 col = texture2D(u_texture, st);
    if (u_gay) {
        float t = mod((st.x + st.y) * 3.0 + u_time, 6.0);
        float v = mod(t, 1.0);
        if (col.rgb != vec3(0.0, 0.0, 0.0)) {
            if (t < 1.0) {
                col.rgb = vec3(1.0, v, 0.0);
            } else if (t < 2.0) {
                col.rgb = vec3(1.0 - v, 1.0, 0.0);
            } else if (t < 3.0) {
                col.rgb = vec3(0.0, 1.0, v);
            } else if (t < 4.0) {
                col.rgb = vec3(0.0, 1.0 - v, 1.0);
            } else if (t < 5.0) {
                col.rgb = vec3(v, 0.0, 1.0);
            } else {
                col.rgb = vec3(1.0, 0.0, 1.0 - v);
            }
        }
    } 
    col.rgb = col.rgb + hash12(gl_FragCoord.xy) * 0.2;
    gl_FragColor = col;
}

