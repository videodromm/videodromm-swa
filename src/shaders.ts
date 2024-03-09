import { Shader } from "./models/Shader";

export const SHADERS:Shader[] = [
  {
    "name": "nanotubes",
    "thumbnail": "/assets/img/gif/nanotubes.gif",
    "description": "dsc",
    "author": "author",
    "tags": ["Audio"],
    "id": 1,
    "frag": "void main( void )\n{\n    vec2 uv = fragCoord.xy/iResolution.xy;\n    vec3 col = 0.5 + 0.5*cos(iTime+uv.xyx+vec3(0,2,4));\n    fragColor = vec4(col,1.0);\n}\n",
    "fragtext": "void main( void )\n{\n    vec2 uv = fragCoord.xy/iResolution.xy;\n    vec3 col = 0.5 + 0.5*cos(iTime+uv.xyx+vec3(0,2,4));\n    fragColor = vec4(col,1.0);\n}\n",
    "uniformNames": ["iTime", "iResolution"]
  },
  {
    "name": "Noise electric",
    "thumbnail": "/assets/img/gif/NoiseAnimation3D.gif",
    "author": "author",
    "description": "d",
    "uniformNames": ["r"],
    "tags": ["2D"],
    "id": 2,
    "frag": "void main( void )\n{\n    vec2 uv = fragCoord.xy/iResolution.xy;\n    vec3 col = 0.5 + 0.5*cos(iTime+uv.xyx+vec3(0,2,4));\n    fragColor = vec4(col,1.0);\n}\n",
    "fragtext": "void main( void )\n{\n    vec2 uv = fragCoord.xy/iResolution.xy;\n    vec3 col = 0.5 + 0.5*cos(iTime+uv.xyx+vec3(0,2,4));\n    fragColor = vec4(col,1.0);\n}\n",

  },
  {
    "name": "Onyx",
    "thumbnail": "/assets/img/gif/Onyx.gif",
    "author": "author",
    "description": "desc",
    "uniformNames": ["g","r"],
    "tags": ["3D"],
    "id": 3,
    "frag": "void main( void )\n{\n    vec2 uv = fragCoord.xy/iResolution.xy;\n    vec3 col = 0.5 + 0.5*cos(iTime+uv.xyx+vec3(0,2,4));\n    fragColor = vec4(col,1.0);\n}\n",
    "fragtext": "void main( void )\n{\n    vec2 uv = fragCoord.xy/iResolution.xy;\n    vec3 col = 0.5 + 0.5*cos(iTime+uv.xyx+vec3(0,2,4));\n    fragColor = vec4(col,1.0);\n}\n",

  }
];
