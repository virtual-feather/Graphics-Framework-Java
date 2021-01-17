uniform vec3 baseColor;

uniform samplerCube cubeTex;
uniform float ratio;
uniform float colorPercent;
uniform vec3 viewPosition;

in vec3 position;
in vec2 UV;
in vec3 normal;
in vec3 cubeTexCoord;

out vec4 fragColor;

void main()
{
	vec4 color = vec4(baseColor, 1.0);

	vec3 I = normalize(position - viewPosition);
	vec3 F = refract(I, normalize(normal), ratio);

	fragColor = colorPercent * color + (1 - colorPercent) * texture(cubeTex, F);
}